import { Action } from 'redux'
import { LoadingStatus } from '../Types'
import { Tweet } from '../tweets/Types'

export enum TweetActionType {
  SET_TWEET = 'tweet/SET_TWEET',
  FETCH_TWEET = 'tweet/FETCH_TWEET',
  CLEAN_TWEET_DATA = 'tweet/CLEAN_TWEET_DATA',
  SET_LOADING_STATUS = 'tweets/SET_LOADING_STATUS',
}

export const setLoandingStatus = (payload: LoadingStatus): SetLodingStatus => ({
  type: TweetActionType.SET_LOADING_STATUS,
  payload,
})
export const setTweet = (payload: Tweet): SetTweetActionType => ({
  type: TweetActionType.SET_TWEET,
  payload,
})
export const fetchTweet = (payload: string): FetchTweetActionType => ({
  type: TweetActionType.FETCH_TWEET,
  payload,
})
export const cleanTweetData = (): CleanTweetData => ({
  type: TweetActionType.CLEAN_TWEET_DATA,
})

export interface FetchTweetActionType extends Action<TweetActionType> {
  type: TweetActionType.FETCH_TWEET
  payload: string
}

export interface SetTweetActionType extends Action<TweetActionType> {
  type: TweetActionType.SET_TWEET
  payload: Tweet
}

export interface SetLodingStatus extends Action<TweetActionType> {
  type: TweetActionType.SET_LOADING_STATUS
  payload: LoadingStatus
}

export interface CleanTweetData extends Action<TweetActionType> {
  type: TweetActionType.CLEAN_TWEET_DATA
}

export type TweetActions =
  | SetTweetActionType
  | SetLodingStatus
  | FetchTweetActionType
  | CleanTweetData
