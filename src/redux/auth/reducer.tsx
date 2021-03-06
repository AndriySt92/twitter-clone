import { AuthStateType } from './Types'
import { LoadingStatus } from '../Types'
import { AuthActions, AuthActionType } from './actions'

const initialAuthState: AuthStateType = {
  userData: null,
  loadingStatus: LoadingStatus.NEVER,
}

export const authReducer = (
  state: AuthStateType = initialAuthState,
  action: AuthActions,
): AuthStateType => {
  switch (action.type) {
    case AuthActionType.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        loadingStatus: LoadingStatus.LOADED,
      }
    case AuthActionType.SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.payload,
      }
    case AuthActionType.LOGOUT:
      return {
        ...state,
        userData: null,
        loadingStatus: LoadingStatus.NEVER,
      }
    default:
      return state
  }
}
