import { fromPromise } from 'rxjs/observable/fromPromise'
import { of } from 'rxjs/observable/of'
import { connect } from 'react-redux'
import { setErrors, setData } from '../../utils/resource'

export const COGNITO_LOGIN = 'COGNITO_LOGIN'


export function loginWithCognoto(payload = {}, { resolve, reject }) {
  return {
    type: COGNITO_LOGIN,
    payload,
    meta: {
      resolve,
      reject,
    },
  }
}

function loginWithCognito(code) {
  return fetch(`${process.env.COGNITO_URL}/oauth2/token`, {
    method: 'POST',
    body: [
      'grant_type=authorization_code',
      'code=' + encodeURIComponent(code),
      'client_id=' + encodeURIComponent(process.env.COGNITO_CLIENT_ID),
      'redirect_uri=' + encodeURIComponent(`${window.location.origin}/auth/token`),
    ].join('&'),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(res => {
      if(!res.ok) {
        throw new Error('token is invalid')
      }
      return res.json()
    })
}

export function cognitoEpic(action$, store) {
  return action$.ofType(COGNITO_LOGIN)
    .mergeMap(({ payload = {}, meta }) => {
      return fromPromise(loginWithCognito(payload))
        .switchMap(response => {
          meta.resolve(response)
          return of(setData(response, { namespace: 'session' }))
        })
        .catch(err => {
          meta.reject(err.message)
          return of(setErrors(err.message, { namespace: 'session' }))
        })
    })
}

export default function cognitoHOC(Component) {
  return connect(
    ({ session }) => ({ session }),
    dispatch => ({
      login: payload => new Promise((resolve, reject) => {
        dispatch(loginWithCognoto(payload, { resolve, reject }))
      }),
    })
  )(Component)
}

function makePromiseActions(dispatch) {
  return new Promise()
}
