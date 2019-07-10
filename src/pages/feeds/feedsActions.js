import { fromPromise } from 'rxjs/observable/fromPromise'
import { of } from 'rxjs/observable/of'
import { concat } from 'rxjs/observable/concat'
import { REQUEST, setLoading, setErrors, setFilters, setData } from '../../utils/resource'
import get from 'lodash/get'
import has from 'lodash/has'
import pick from 'lodash/pick'
import isEmpty from 'lodash/isEmpty'

const GET_FEEDS_ACTION = 'GET_FEEDS_ACTION'

export function fetch(payload) {
  return {
    type: GET_FEEDS_ACTION,
    meta: {
      namespace: 'feeds',
      endpoint: 'feeds',
      queries: ['page'],
      dataFunction: 'paginationList',
    },
    payload,
  }
}

export function feedsEpic(action$, store, { API }) {
  return action$.ofType(GET_FEEDS_ACTION)
    .mergeMap(({ payload, meta }) => {
      let {
        endpoint,
        namespace,
        queries = [],
      } = meta

      return concat(
        of(
          setLoading(true, meta),
          setErrors({}, meta),
          setFilters(pick(payload, queries), meta),
        ),
        fromPromise(getFeeds(API, payload, queries))
          .switchMap(response => {
            const posts = get(response, 'results', []).reduce((res, item) => {
              const _post = {}
              const _parent_post = {}
              if(has(item, 'parent_post.uuid')) {
                _parent_post[get(item, 'parent_post.uuid')] = item.parent_post
              }
              if(get(item, 'entity_type') === 'node') {
                _post[get(item, 'uuid')] = item
              }
              return {
                ...res,
                ..._post,
                ..._parent_post,
              }
            }, {})
            return of(
              setData(posts, { namespace: 'posts' }),
              setData(response, meta),
              setLoading(false, meta),
            )
          })
          .catch(err => concat(of(
            setErrors(err.errors || err, meta),
            setLoading(false, meta),
          )).filter(Boolean)),
      ).filter(Boolean)
    })
}

function getFeeds(API, payload, queries) {
  return API.run('feeds').request('GET', pick(payload, queries))
    .then(({ count, results }) => {
      return Promise.all([count, ...results.filter(({ entity_uuid }) => !!entity_uuid).map((item) => {
        return fetchFeedInfo(API, item)
      })])
    })
    .then(([count, ...results]) => {
      return { count, results }
    })
    .catch(err => ({ }))
}

function getGroupInfo(API, uuid) {
  return API.run(`groups/${uuid}`).request('GET')
    .catch(err => ({}))
}

function getUserInfo(API, uuid) {
  return API.run(`users/${uuid}`).request('GET')
    .catch(err => ({}))
}

function fetchAllPostInfo(API, uuid) {
  let postdata = {}
  return API.run(`posts/${uuid}`).request('GET')
    .then(_postdata => {
      postdata = _postdata
      const { attachments } = _postdata
      return Promise.all([
        API.run(`posts/${uuid}/like`).request('GET'),
        isEmpty(attachments) ? () => {} : API.run(`files/${attachments[0]}`).request('GET'),
        getGroupInfo(API, _postdata.group_uuid),
        getUserInfo(API, _postdata.author_uuid),
      ])
    })
    .then(([{ status }, image, group, user]) => {
      return { ...postdata, isLiked: status, image, group, user }
    })
    .catch(err => ({}))
}

function fetchComment(API, uuid) {
  let postdata = {}
  return fetchAllPostInfo(API, uuid)
    .then(post => {
      postdata = post
      return fetchAllPostInfo(API, post.thread_uuid)
    })
    .then((parent_post) => ({ ...postdata, parent_post }))
}

function fetchFeedInfo(API, item) {
  const { entity_uuid, entity_type, user_uuid } = item
  switch (entity_type) {
    case 'node':
      return fetchAllPostInfo(API, entity_uuid)
        .then(data => ({ ...item, ...data }))
        .catch(err => item)
    case 'comment':
      return fetchComment(API, entity_uuid)
        .then(data => ({ ...item, ...data }))
        .catch(err => item)
    case 'user':
      return getUserInfo(API, user_uuid)
        .then(data => ({ ...item, ...data }))
        .catch(err => item)
  }
}
