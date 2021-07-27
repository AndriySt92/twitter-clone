import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthActionType, setLoandingStatus, setUserData, FetchUserDataActionType } from './actions'
import { LoadingStatus } from '../Types'
import { authApi } from '../../API/authApi'

function* signInRequest({ payload }: FetchUserDataActionType): any {
  try {
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
  yield takeEvery(AuthActionType.FETCH_USER_DATA, signInRequest)
  yield takeEvery(AuthActionType.INITIALIZE_USER, getMeRequest)
}
