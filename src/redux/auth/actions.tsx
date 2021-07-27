import { Action } from 'redux'
import { LoadingStatus } from '../Types'
import { Tweet } from '../tweets/Types'
import { UserDataType, SignInType } from './Types'

export enum AuthActionType {
  FETCH_USER_DATA = 'auth/FETCH_USER_DATA',
  SET_USER_DATA = 'auth/SET_USER_DATA',
  SET_LOADING_STATUS = 'auth/SET_LOADING_STATUS',
  INITIALIZE_USER = 'auth/INITIALIZE_USER'
}

export const setLoandingStatus = (payload: LoadingStatus): SetLodingStatus => ({
  type: AuthActionType.SET_LOADING_STATUS,
  payload,
})
export const setUserData = (payload: UserDataType): SetUserDataActionType => ({
  type: AuthActionType.SET_USER_DATA,
  payload,
})
export const fetchUserData = (payload: SignInType): FetchUserDataActionType => ({
  type: AuthActionType.FETCH_USER_DATA,
  payload,
})

export const initializeUser = () => ({
  type: AuthActionType.INITIALIZE_USER
})

export interface FetchUserDataActionType extends Action<AuthActionType> {
  type: AuthActionType.FETCH_USER_DATA
  payload: SignInType
}

export interface SetUserDataActionType extends Action<AuthActionType> {
  type: AuthActionType.SET_USER_DATA
  payload: UserDataType
}

export interface SetLodingStatus extends Action<AuthActionType> {
  type: AuthActionType.SET_LOADING_STATUS
  payload: LoadingStatus
}

export interface InitializeUser extends Action<AuthActionType> {
  type: AuthActionType.INITIALIZE_USER
}

export type AuthActions = SetUserDataActionType | SetLodingStatus | FetchUserDataActionType | InitializeUser
