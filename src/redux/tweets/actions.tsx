import { Action } from 'redux'
import { LoadingStatus } from '../Types'
import { TweetsState, Tweet } from './Types'

export enum TweetsActionType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  SET_USER_TWEETS = 'tweets/SET_USER_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  UPDATE_TWEET = 'tweets/UPDATE_TWEET',
  SET_UPDATED_TWEET = '/tweets/SET_UPDATED_TWEET',
  REMOVE_TWEET = 'tweets/REMOVE_TWEET',
  FETCH_USER_TWEETS = 'tweets/FETCH_USER_TWEETS',
  SET_LOADING_STATUS_FETCH_TWEETS = 'tweets/SET_LOADING_STATUS_FETCH_TWEETS',
  ADD_TWEET = 'tweets/ADD_TWEET',
  SET_ADDED_TWEET = 'tweets/SET_ADDED_TWEET',
  SET_LOADING_STATUS_ADD_TWEET = 'tweets/SET_LOADING_STATUS_ADD_TWEET',
  LIKE_TWEET = 'tweets/LIKE_TWEET',
  SET_LIKE_TWEET = 'tweets/SET_LIKE_TWEET',
}

export const setLoandingStatusFetchTweets = (
  payload: LoadingStatus,
): SetLoandingStatusFetchTweets => ({
  type: TweetsActionType.SET_LOADING_STATUS_FETCH_TWEETS,
  payload,
})
export const setTweets = (payload: TweetsState['tweets']): SetTweetsActionType => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
})
export const setUserTweets = (payload: TweetsState['tweets']): SetUserTweetsActionType => ({
  type: TweetsActionType.SET_USER_TWEETS,
  payload,
})
export const fetchTweets = (): FetchTweetsActionType => ({ type: TweetsActionType.FETCH_TWEETS })
export const addTweet = (payload: { text: string; images: string[] }): AddTweetType => ({
  type: TweetsActionType.ADD_TWEET,
  payload,
})
export const setAddTweet = (payload: Tweet): FetchAddTweetType => ({
  type: TweetsActionType.SET_ADDED_TWEET,
  payload,
})
export const setLoadingStatusAddTweet = (payload: LoadingStatus) => ({
  type: TweetsActionType.SET_LOADING_STATUS_ADD_TWEET,
  payload,
})
export const removeTweet = (payload: string) => ({ type: TweetsActionType.REMOVE_TWEET, payload })
export const updateTweet = (payload: { tweetId: string; text: string }) => ({
  type: TweetsActionType.UPDATE_TWEET,
  payload,
})
export const setUpdatedTweet = (payload: Tweet): SetUpdatedTweet => ({
  type: TweetsActionType.SET_UPDATED_TWEET,
  payload
})
export const fetchUserTweets = (payload: string): FetchUserTweetsType => ({
  type: TweetsActionType.FETCH_USER_TWEETS,
  payload,
})

export const likeTweet = (payload: { userId: string; tweetId: string }): LikeTweetType => ({
  type: TweetsActionType.LIKE_TWEET,
  payload,
})

export const setLikeTweet = (payload: Tweet): SetLikeTweetType => ({
  type: TweetsActionType.SET_LIKE_TWEET,
  payload,
})

export interface FetchTweetsActionType extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS
}

export interface SetTweetsActionType extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS
  payload: TweetsState['tweets']
}

export interface SetUserTweetsActionType extends Action<TweetsActionType> {
  type: TweetsActionType.SET_USER_TWEETS
  payload: TweetsState['tweets']
}

export interface FetchTweetsActionType extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS
}

export interface SetLoandingStatusFetchTweets extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATUS_FETCH_TWEETS
  payload: LoadingStatus
}

export interface AddTweetType extends Action<TweetsActionType> {
  type: TweetsActionType.ADD_TWEET
  payload: {
    text: string
    images: string[]
  }
}

export interface FetchAddTweetType extends Action<TweetsActionType> {
  type: TweetsActionType.SET_ADDED_TWEET
  payload: Tweet
}

export interface SetLoadingStatusAddTweet extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATUS_ADD_TWEET
  payload: LoadingStatus
}

export interface RemoveTweetType extends Action<TweetsActionType> {
  type: TweetsActionType.REMOVE_TWEET
  payload: string
}

export interface UpdateTweetType extends Action<TweetsActionType> {
  type: TweetsActionType.UPDATE_TWEET
  payload: {
    tweetId: string
    text: string
  }
}

export interface SetUpdatedTweet extends Action<TweetsActionType> {
  type: TweetsActionType.SET_UPDATED_TWEET
  payload: Tweet
}

export interface FetchUserTweetsType extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_USER_TWEETS
  payload: string
}

export interface LikeTweetType extends Action<TweetsActionType> {
  type: TweetsActionType.LIKE_TWEET
  payload: {
    userId: string
    tweetId: string
  }
}

export interface SetLikeTweetType extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LIKE_TWEET
  payload: Tweet
}

export type TweetsActions =
  | SetLikeTweetType
  | LikeTweetType
  | SetUserTweetsActionType
  | FetchUserTweetsType
  | UpdateTweetType
  | SetUpdatedTweet
  | RemoveTweetType
  | SetTweetsActionType
  | SetLoandingStatusFetchTweets
  | FetchTweetsActionType
  | AddTweetType
  | FetchAddTweetType
  | SetLoadingStatusAddTweet
