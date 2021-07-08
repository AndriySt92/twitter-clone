import { call, put, takeEvery } from 'redux-saga/effects'
import { FetchTweetActionType, setLoandingStatus, setTweet, TweetActionType } from './actions'
import { tweetsApi } from '../../API/tweetsApi'
import {LoadingStatus} from '../Types'

function* fetchTweetRequest({payload: tweetId} : FetchTweetActionType): any {
  try{
    debugger
    const tweet = yield call(tweetsApi.fetchTweetData, tweetId)
    //tweet is array so we need get elem by 0 index
    yield put(setTweet(tweet[0]))
  } catch(error) {
    yield put(setLoandingStatus(LoadingStatus.ERORR))
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionType.FETCH_TWEET, fetchTweetRequest)
}
