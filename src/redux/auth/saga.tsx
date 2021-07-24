import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthActionType, setLoandingStatus, setUserData, FetchUserDataActionType} from './actions'
import {LoadingStatus } from '../Types'
import {SignInInterface } from './Types'
import { authApi } from '../../API/authApi'

function* signInRequest({payload}: FetchUserDataActionType): any {
  try{
    const data = yield call(authApi.signIn, payload)
    if(data.status === 'success'){
      yield put(setUserData(data.data))
    }
  } catch(error) {
    yield put(setLoandingStatus(LoadingStatus.ERORR))
  }
}

export function* authSaga() {
  yield takeEvery(AuthActionType.FETCH_USER_DATA, signInRequest)
}
