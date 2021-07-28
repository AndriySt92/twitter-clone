import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthActionType, setLoandingStatus, setUserData, FetchSignInDataActionType, FetchSignUpDataActionType } from './actions'
import { LoadingStatus } from '../Types'
import { authApi } from '../../API/authApi'

function* signUpRequest({ payload }: FetchSignUpDataActionType): any {
  try {
    yield put(setLoandingStatus(LoadingStatus.LOADING))
    const { data } = yield call(authApi.signUp, payload)
    yield put(setLoandingStatus(LoadingStatus.LOADED))
  } catch (error) {
    yield put(setLoandingStatus(LoadingStatus.ERROR))
  }
}

function* signInRequest({ payload }: FetchSignInDataActionType): any {
  try {
    yield put(setLoandingStatus(LoadingStatus.LOADING))
    const { data } = yield call(authApi.signIn, payload)
    yield put(setUserData(data))
    localStorage.setItem('token', data.token)
  } catch (error) {
    yield put(setLoandingStatus(LoadingStatus.ERROR))
  }
}

function* getMeRequest(): any {
  try {
    const { data } = yield call(authApi.getMe)
    yield put(setUserData(data))
  } catch (error) {
    yield put(setLoandingStatus(LoadingStatus.ERROR))
  }
}

export function* authSaga() {
  yield takeEvery(AuthActionType.FETCH_SIGNIN_DATA, signInRequest)
  yield takeEvery(AuthActionType.INITIALIZE_USER, getMeRequest)
  yield takeEvery(AuthActionType.FETCH_SIGNUP_DATA, signUpRequest)
}
