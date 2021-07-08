import { call, put, takeEvery } from 'redux-saga/effects'
import { AddTweetType, setLoandingStatus, setTweets, TweetsActionType, setAddTweet } from './actions'
import { tweetsApi } from '../../API/tweetsApi'
import {LoadingStatus} from '../Types'
import { Tweet } from './Types'

function* fetchTweetsRequest(): any {
  try{
    const tweets = yield call(tweetsApi.fetchTweets)
    yield put(setTweets(tweets))
  } catch(error) {
    yield put(setLoandingStatus(LoadingStatus.ERORR))
  }
}

function* addTweetRequest({payload}: AddTweetType): any {

  const testTweet: Tweet = {
    //@ts-ignore
    id: Math.random().toString(36).substr(2),
    text: payload,
    user: {
      fullname: "test",
      username: 'test',
      avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  }

  try{
    debugger
    //@ts-ignore
    const tweet = yield call(tweetsApi.addTweet, testTweet)
    console.log(tweet)
    yield put(setAddTweet(tweet))
  } catch(error) {
    yield put(setLoandingStatus(LoadingStatus.ERORR))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeEvery(TweetsActionType.ADD_TWEET, addTweetRequest)
}
