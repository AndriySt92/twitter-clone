import { call, put, takeEvery } from 'redux-saga/effects'
import { FetchTweetActionType, setLoandingStatus, setTweet, TweetActionType } from './actions'
import { tweetsApi } from '../../API/tweetsApi'
import { LoadingStatus } from '../Types'

function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionType): any {
  try {
    const data = yield call(tweetsApi.fetchTweetData, tweetId)
    if (data.status === 'success') {
      yield put(setTweet(data.data))
    }
  } catch (error) {
    yield put(setLoandingStatus(LoadingStatus.ERROR))
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionType.FETCH_TWEET, fetchTweetRequest)
}
