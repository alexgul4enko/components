import { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  startSubmit, stopSubmit, setSubmitSucceeded, setSubmitFailed,
} from 'redux-form'

import { fromPromise } from 'rxjs/observable/fromPromise'
import { concat } from 'rxjs/observable/concat'
// import { interval } from 'rxjs/observable/interval'
import { of } from 'rxjs/observable/of'

import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/takeUntil'

import pathToRegexp from 'path-to-regexp'

import omit from 'lodash/omit'
import pick from 'lodash/pick'
import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
import values from 'lodash/values'
import get from 'lodash/get'
import has from 'lodash/has'

export const REQUEST = '@resource/request'
export const SET_DATA = '@resource/set-data'
const SET_ERRORS = '@resource/set-errors'
const SET_LOADING = '@resource/set-loading'
const SET_FILTERS = '@resource/set-filters'
const CLEAR_RESOURCES = '@resource/clear'
export const PERSIST = '@@Persist@@'
export const CLEAR_ALL = '@@CLEAR_ALL@@'


export function clearAllData(payload) {
  return {
    type: CLEAR_ALL,
    payload,
  }
}

export function persistAction(payload) {
  return {
    type: PERSIST,
    payload: { ...payload, persisted: true },
  }
}

export function request(payload, meta) {
  return {
    type: REQUEST,
    meta,
    payload,
  }
}

export function setData(payload, meta) {
  return {
    type: SET_DATA,
    meta,
    payload,
  }
}

export function setFilters(payload, meta) {
  return {
    type: SET_FILTERS,
    meta,
    payload,
  }
}

export function setErrors(payload, meta) {
  return {
    type: SET_ERRORS,
    meta,
    payload,
  }
}

export function setLoading(payload, meta) {
  return {
    type: SET_LOADING,
    meta,
    payload,
  }
}

function getNameSpaceFromResource(resource) {
  if(typeof resource === 'string') { return { namespace: resource, key: resource } }
  return { namespace: resource.namespace, key: resource.prefix || resource.namespace }
}

function getDefaultState(resource) {
  if(has(resource, 'defaultState')) {
    return resource.defaultState
  }
  let defaultState = {
    isLoading: false,
    data: {},
  }
  if(has(resource, 'queries')) {
    defaultState = { ...defaultState, data: {}, filters: {} }
  }
  return defaultState
}

function mapStateToProps(resources) {
  return function(state, props) {
    if(!Array.isArray(resources)) {
      resources = [resources]
    }
    return resources.reduce((res, resource) => {
      const { key, namespace } = getNameSpaceFromResource(resource)
      return {
        ...res,
        [key]: { ...props[key], ...get(state, namespace, {}) },
      }
    }, {})
    return data
  }
}

function getMetaFromResource(resource, options = {}) {
  if(typeof resource === 'string') {
    return {
      endpoint: resource, namespace: resource, dataFunction: 'object', ...options,
    }
  }
  return {
    dataFunction: 'object',
    ...resource,
    ...options,
    endpoint: resource.endpoint || resource.namespace,
    namespace: resource.namespace,
  }
}

function makeRequestAction(type, meta) {
  return dispatch => (payload, actionmeta = {}) => new Promise((resolve, reject) => {
    dispatch(request(payload, {
      ...meta, resolve, reject, ...actionmeta, type,
    }))
  })
}

function makeSimpleAction(meta, action) {
  return dispatch => (payload, actionmeta = {}) => dispatch(action(payload, { ...meta, ...actionmeta }))
}

function makeResourceActions(resource, options = {}) {
  const meta = getMetaFromResource(resource, options)
  const actions = {
    create: makeRequestAction('POST', meta),
    fetch: makeRequestAction('GET', meta),
    update: makeRequestAction('PATCH', meta),
    remove: makeRequestAction('DELETE', meta),
    replace: makeRequestAction('PUT', meta),
    setData: makeSimpleAction(meta, setData),
    setErrors: makeSimpleAction(meta, setErrors),
    setLoading: makeSimpleAction(meta, setLoading),
  }
  if(get(resource, 'form')) {
    actions.onSubmit = makeRequestAction('submitForm', meta)
  }
  if(has(resource, 'queries')) {
    actions.setFilters = makeSimpleAction(meta, setFilters)
  }
  return actions
}

function bindActions(actions, dispatch) {
  return Object.keys(actions).reduce((acts, key) => {
    if(!actions[key]) { return acts }
    return {
      ...acts,
      [key]: actions[key](dispatch),
    }
  }, {})
}

function mapDispatchToProps(resources, options) {
  return (dispatch) => {
    if(!Array.isArray(resources)) {
      resources = [resources]
    }
    return resources.reduce((res, resource) => {
      const { key } = getNameSpaceFromResource(resource)
      const { onSubmit, ...actions } = makeResourceActions(resource, options)
      return {
        ...res,
        [key]: { ...res[key], ...bindActions(actions, dispatch) },
        onSubmit: res.onSubmit || bindActions({ onSubmit }, dispatch).onSubmit,
      }
    }, {})
  }
}

export default function connectResouces(resource, options = {}) {
  return compose(
    connect(null, (dispatch, props) => mapDispatchToProps(resource, options, props)),
    connect(mapStateToProps(resource)),
  )
}

export function resourcesReducer(state = {}, { type, payload = {}, meta = {} }) {
  switch (type) {
    case SET_ERRORS:
    case SET_FILTERS:
    case SET_LOADING:
      const dataKey = {
        [SET_ERRORS]: 'errors',
        [SET_FILTERS]: 'filters',
        [SET_LOADING]: 'isLoading',
      }[type]
      return { ...state, [dataKey]: payload }
    case SET_DATA:
      const { dataFunction = 'object' } = meta
      return ({
        ...state,
        data: typeof dataFunction === 'function' ? dataFunction(get(state, 'data'), payload) : concatDataFunctions[dataFunction](get(state, 'data'), payload),
      })
    default:
      return state
  }
  return state
}

const concatDataFunctions = {
  object: (prev = {}, next) => ({
    ...(prev || {}),
    ...(next || {}),
  }),
  paginationList: (prev = {}, nextData) => {
    if(!has(nextData, 'results')) {
      return {
        ...prev,
        results: get(prev, 'results', []).map(item => (item.uuid === nextData.uuid ? { ...item, ...nextData } : item)),
      }
    }
    const { count, results } = nextData || {}
    return {
      count,
      results: [...get(prev, 'results', []), ...results],
    }
  },
  none: prev => prev,
  replace: (_, next) => next,
  list: (prev, next) => next,
}

function getFormRequestType(form = {}, data) {
  const { formAction, switchActionByKey } = form
  if(!switchActionByKey) {
    return formAction || 'POST'
  }
  return get(data, switchActionByKey) ? get(formAction, 'update', 'PUT') : get(formAction, 'create', 'POST')
}

export function epic(action$, store, { API }) { // FIXME API
  return action$.ofType(REQUEST)
    .mergeMap(({ meta, payload }) => {
      let {
        type,
        endpoint,
        form,
        namespace,
        queries = [],
        useGlobalErrors = false,
        isList,
        dispatch,
        resolve,
        forceUpdates,
        reject,
      } = meta
      if(endpoint.search(/\/:/) > -1) {
        endpoint = pathToRegexp.compile(endpoint)(payload)
      }
      const isFormAction = type === 'submitForm'
      if(isFormAction) {
        type = getFormRequestType(form, get(store.getState(), `${namespace}.data`))
      }
      return concat(
        of(
          !forceUpdates && setLoading(true, meta),
          !forceUpdates && setErrors({}, meta),
          !isEmpty(queries) && setFilters(pick(payload, queries), meta),
        ),
        fromPromise(API.run(endpoint).request(type, pick(payload, queries), omit(payload, queries)))
          .switchMap(response => of(
            (isList && type !== 'GET') ? request(undefined, { ...meta, type: 'GET' }) : setData(response, meta),
            !forceUpdates && setLoading(false, meta),
            resolve(response),
          ))
          .catch(err => concat(of(
            setErrors(err.errors || err, meta),
            !forceUpdates && setLoading(false, meta),
            reject(err.errors || err, meta),
          )).filter(Boolean)),
      ).filter(Boolean)
    })
}

export function combineReducers(reducers, initialState = {}) {
  return (state = initialState, action) => {
    switch (action.type) {
      case CLEAR_ALL:
        return pick(state, ['endpoint', 'router', 'branding', 'tutorial', 'form'])
      default:
        if(action.type.startsWith('@resource/')) {
          return {
            ...state,
            [action.meta.namespace]: resourcesReducer(get(state, action.meta.namespace, {}), action),
          }
        }
        return Object.keys(reducers).reduce((store, key) => ({
          ...(store || {}),
          [key]: reducers[key](get(state, key), action),
        }), state)
    }
  }
}
