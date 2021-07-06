import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsActionType } from './actions'
import { tweetsApi } from '../../API/tweetsApi'

function* fetchUser(): any {
  const data = yield call(tweetsApi.fetchTweets)

  
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchUser)
}
