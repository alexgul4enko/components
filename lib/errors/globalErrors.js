import { handleActions, createAction } from 'redux-actions'
import uuidv4 from 'uuid/v4'

const SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR'
const CLEAR_GLOBAL_ERROR = 'CLEAR_GLOBAL_ERROR'

const actions = {
  show: createAction(SET_GLOBAL_ERROR),
  hide: createAction(CLEAR_GLOBAL_ERROR),
}

const defaultState = {
  message: '',
  type: '',
}

const globalError = handleActions({
  [SET_GLOBAL_ERROR]: (state, action) => ({ ...action.payload, uuid: uuidv4() }),
  [CLEAR_GLOBAL_ERROR]: () => defaultState,
}, defaultState)


export { globalError, actions }
