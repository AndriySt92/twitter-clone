import { call, put, takeEvery } from 'redux-saga/effects'
import {
  AddTweetType,
  setLoandingStatusFetchTweets,
  setTweets,
  TweetsActionType,
  setAddTweet,
  setLoadingStatusAddTweet,
} from './actions'
import { tweetsApi } from '../../API/tweetsApi'
import { LoadingStatus } from '../Types'
import { Tweet } from './Types'

function* fetchTweetsRequest(): any {
  try {
    const tweets = yield call(tweetsApi.fetchTweets)
    yield put(setTweets(tweets.data))
  } catch (error) {
    yield put(setLoandingStatusFetchTweets(LoadingStatus.ERROR))
  }
}

function* addTweetRequest({ payload }: AddTweetType): any {
  try {
    yield put(setLoadingStatusAddTweet(LoadingStatus.LOADING))
    const tweet = yield call(tweetsApi.addTweet, payload)
    if (tweet.status === 'success') {
      yield put(setAddTweet(tweet.data))
    }
  } catch (error) {
    yield put(setLoadingStatusAddTweet(LoadingStatus.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeEvery(TweetsActionType.ADD_TWEET, addTweetRequest)
}
