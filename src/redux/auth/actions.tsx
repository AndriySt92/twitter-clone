import { Action } from 'redux'
import { LoadingStatus } from '../Types'
import { UserDataType, SignInType, SignUpType } from './Types'

export enum AuthActionType {
  FETCH_SIGNUP_DATA = 'auth/FETCH_SIGNUP_DATA',
  FETCH_SIGNIN_DATA = 'auth/FETCH_SIGNIN_DATA',
  SET_USER_DATA = 'auth/SET_USER_DATA',
  SET_LOADING_STATUS = 'auth/SET_LOADING_STATUS',
  INITIALIZE_USER = 'auth/INITIALIZE_USER',
  LOGOUT = 'auth/LOGOUT',
}

export const setLoandingStatus = (payload: LoadingStatus): SetLodingStatus => ({
  type: AuthActionType.SET_LOADING_STATUS,
  payload,
})

export const setUserData = (payload: UserDataType): SetUserDataActionType => ({
  type: AuthActionType.SET_USER_DATA,
  payload,
})

export const fetchSignInData = (payload: SignInType): FetchSignInDataActionType => ({
  type: AuthActionType.FETCH_SIGNIN_DATA,
  payload,
})

export const initializeUser = (): InitializeUserType => ({
  type: AuthActionType.INITIALIZE_USER,
})

export const fetchSignUpData = (payload: SignUpType): FetchSignUpDataActionType => ({
  type: AuthActionType.FETCH_SIGNUP_DATA,
  payload,
})

export const logout = (): LogoutType => ({
  type: AuthActionType.LOGOUT,
})

export interface FetchSignInDataActionType extends Action<AuthActionType> {
  type: AuthActionType.FETCH_SIGNIN_DATA
  payload: SignInType
}

export interface FetchSignUpDataActionType extends Action<AuthActionType> {
  type: AuthActionType.FETCH_SIGNUP_DATA
  payload: SignUpType
}

export interface SetUserDataActionType extends Action<AuthActionType> {
  type: AuthActionType.SET_USER_DATA
  payload: UserDataType
}

export interface SetLodingStatus extends Action<AuthActionType> {
  type: AuthActionType.SET_LOADING_STATUS
  payload: LoadingStatus
}

export interface InitializeUserType extends Action<AuthActionType> {
  type: AuthActionType.INITIALIZE_USER
}

export interface LogoutType extends Action<AuthActionType> {
  type: AuthActionType.LOGOUT
}

export type AuthActions =
  | LogoutType
  | SetUserDataActionType
  | SetLodingStatus
  | FetchSignInDataActionType
  | InitializeUserType
  | FetchSignUpDataActionType
