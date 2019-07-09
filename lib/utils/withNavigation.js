import { push } from 'connected-react-router'
import { buildQueryParams } from './queryParams'
import { of } from 'rxjs/observable/of'
import get from 'lodash/get'

const WITH_NAVIGATION = 'WITH_NAVIGATION'


export function navigate(payload) {
  return {
    type: WITH_NAVIGATION,
    payload,
  }
}

export function epic(action$, store, { API }) { // FIXME API
  return action$.ofType(WITH_NAVIGATION)
    .mergeMap(({ payload }) => {
      const path = get(store.getState(), 'router.location.pathname')
      return of(push(`${path}?${buildQueryParams(payload)}`))
    })
}
