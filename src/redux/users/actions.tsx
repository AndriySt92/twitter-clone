import { LoadingStatus } from '../Types'
import { UserDataType } from '../auth/Types'

export enum UsersActionType {
  FETCH_USERS = 'users/FETCH_USERS',
  SET_USERS = 'users/SET_USERS',
  SET_LOADING_STATUS = 'users/SET_LOADING_STATUS',
}

export const fetchUsers = (): FetchUsersType => ({ type: UsersActionType.FETCH_USERS })

export const setUsers = (payload: UserDataType[]): SetUsersType => ({
  type: UsersActionType.SET_USERS,
  payload,
})

export const setLoadingStatus = (payload: LoadingStatus): SetLoadingStatusType => ({
  type: UsersActionType.SET_LOADING_STATUS,
  payload,
})

export interface FetchUsersType {
  type: UsersActionType.FETCH_USERS
}

export interface SetUsersType {
  type: UsersActionType.SET_USERS
  payload: UserDataType[]
}

export interface SetLoadingStatusType {
  type: UsersActionType.SET_LOADING_STATUS
  payload: LoadingStatus
}

export type UsersActions = FetchUsersType | SetUsersType | SetLoadingStatusType
