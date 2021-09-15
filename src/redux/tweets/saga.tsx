import { call, put, takeEvery } from 'redux-saga/effects'
import {
  AddTweetType,
  setLoandingStatusFetchTweets,
  setTweets,
  TweetsActionType,
  setAddTweet,
  setLoadingStatusAddTweet,
  RemoveTweetType,
  UpdateTweetType,
  FetchUserTweetsType,
  setUserTweets,
  SetTweetLikeType,
} from './actions'
import { tweetsApi } from '../../API/tweetsApi'
import { LoadingStatus } from '../Types'

function* fetchTweetsRequest(): any {
  try {
    const tweets = yield call(tweetsApi.fetchTweets)
    yield put(setTweets(tweets.data))
  } catch (error) {
    yield put(setLoandingStatusFetchTweets(LoadingStatus.ERROR))
  }
}

function* fetchUserTweetsRequest({ payload }: FetchUserTweetsType): any {
  try {
    const tweets = yield call(tweetsApi.fetchTweets, payload)
    yield put(setUserTweets(tweets.data))
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

function* removeTweetRequest({ payload }: RemoveTweetType): any {
  try {
    yield call(tweetsApi.removeTweet, payload)
    yield call(fetchTweetsRequest)
  } catch (error) {
    console.log(error)
  }
}

function* updateTweetRequest({ payload }: UpdateTweetType): any {
  try {
    yield call(tweetsApi.updateTweet, payload)
    yield call(fetchTweetsRequest)
  } catch (error) {
    console.log(error)
  }
}

function* likeTweetRequest({ payload }: SetTweetLikeType): any {
  try {
    yield call(tweetsApi.tweetLike, payload)
    yield call(fetchTweetsRequest)
  } catch (error) {
    console.log(error)
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeEvery(TweetsActionType.FETCH_USER_TWEETS, fetchUserTweetsRequest)
  yield takeEvery(TweetsActionType.ADD_TWEET, addTweetRequest)
  yield takeEvery(TweetsActionType.REMOVE_TWEET, removeTweetRequest)
  yield takeEvery(TweetsActionType.UPDATE_TWEET, updateTweetRequest)
  yield takeEvery(TweetsActionType.SET_TWEET_LIKE, likeTweetRequest)
}
