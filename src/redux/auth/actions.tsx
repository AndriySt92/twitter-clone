import { Action } from 'redux'
import { LoadingStatus } from '../Types'
import { Tweet } from '../tweets/Types'
import { UserDataInterface, SignInInterface } from './Types'

export enum AuthActionType {
  FETCH_USER_DATA = 'auth/FETCH_USER_DATA',
  SET_USER_DATA = 'auth/SET_USER_DATA',
  SET_LOADING_STATUS = 'auth/SET_LOADING_STATUS',
}

export const setLoandingStatus = (payload: LoadingStatus): SetLodingStatus => ({
  type: AuthActionType.SET_LOADING_STATUS,
  payload,
})
export const setUserData = (payload: UserDataInterface): SetUserDataActionType => ({
  type: AuthActionType.SET_USER_DATA,
  payload,
})
export const fetchUserData = (payload: SignInInterface): FetchUserDataActionType => ({
  type: AuthActionType.FETCH_USER_DATA,
  payload,
})

export interface FetchUserDataActionType extends Action<AuthActionType> {
  type: AuthActionType.FETCH_USER_DATA
  payload: SignInInterface
}

export interface SetUserDataActionType extends Action<AuthActionType> {
  type: AuthActionType.SET_USER_DATA
  payload: UserDataInterface
}

export interface SetLodingStatus extends Action<AuthActionType> {
  type: AuthActionType.SET_LOADING_STATUS
  payload: LoadingStatus
}

export type AuthActions = SetUserDataActionType | SetLodingStatus | FetchUserDataActionType
