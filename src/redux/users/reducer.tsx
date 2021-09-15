import { UsersStateType } from './Types'
import { LoadingStatus } from '../Types'
import { UsersActionType, UsersActions } from './actions'

const initialUsersState: UsersStateType = {
  users: null,
  loadingStatus: LoadingStatus.NEVER,
}

export const userReducer = (
  state: UsersStateType = initialUsersState,
  action: UsersActions,
): UsersStateType => {
  switch (action.type) {
    case UsersActionType.SET_USERS:
      return {
        ...state,
        users: action.payload,
        loadingStatus: LoadingStatus.LOADED,
      }
    case UsersActionType.SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.payload,
      }
    default:
      return state
  }
}
