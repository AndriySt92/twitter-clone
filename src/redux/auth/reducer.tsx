import { AuthState } from './Types'
import { LoadingStatus } from '../Types'
import { AuthActions, AuthActionType } from './actions'

const initialAuthState: AuthState = {
  userData: null,
  loadingStatus: LoadingStatus.NEVER,
}

export const authReducer = (
  state: AuthState = initialAuthState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case AuthActionType.FETCH_USER_DATA:
      return {
        ...state,
        loadingStatus: LoadingStatus.LOADING,
      }
    case AuthActionType.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        loadingStatus: LoadingStatus.LOADED,
      }
    default:
      return state
  }
}
