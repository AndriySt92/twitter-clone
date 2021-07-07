import { call, put, takeEvery } from 'redux-saga/effects'
import { setLoandingStatus, setTweets, TweetsActionType } from './actions'
import { tweetsApi } from '../../API/tweetsApi'
import {LoadingStatus} from '../Types'

function* fetchTweets(): any {
  try{
    const data = yield call(tweetsApi.fetchTweets)
    yield put(setTweets(data))
  } catch(error) {
    yield put(setLoandingStatus(LoadingStatus.ERORR))
  }
 

  
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweets)
}
