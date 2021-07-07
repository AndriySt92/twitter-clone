import { call, put, takeEvery } from 'redux-saga/effects'
import { setLoandingStatus, setTopics, TopicsActionType } from './actions'
import { topicsApi } from '../../API/topicApi'
import { LoadingStatus } from './Types'

function* fetchTopics(): any {
  try{
    const data = yield call(topicsApi.fetchTopics)
    yield put(setTopics(data))
  } catch(error) {
    yield put(setLoandingStatus(LoadingStatus.ERORR))
  }
 

  
}

export function* topicsSaga() {
  yield takeEvery(TopicsActionType.FETCH_TOPICS, fetchTopics)
}
