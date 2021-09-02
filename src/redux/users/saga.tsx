import { call, put, takeEvery } from 'redux-saga/effects'
import {
  UsersActionType,
  setLoadingStatus,
  setUsers,
} from './actions'
import { LoadingStatus } from '../Types'
import { userApi } from '../../API/userApi'

function* getUsers(): any {
  try {
    const { data } = yield call(userApi.getAllUsers)
    yield put(setUsers(data))
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* usersSaga() {
  yield takeEvery(UsersActionType.FETCH_USERS, getUsers)
}
