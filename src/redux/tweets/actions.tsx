import { Action } from 'redux';
import { TweetActionType } from '../tweet/actions';
import {LoadingStatus} from '../Types'
import {TweetsState, Tweet} from './Types';

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATUS_FETCH_TWEETS = 'tweets/SET_LOADING_STATUS_FETCH_TWEETS',
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_ADDED_TWEET = 'tweets/SET_ADDED_TWEET',
    SET_LOADING_STATUS_ADD_TWEET = 'tweets/SET_LOADING_STATUS_ADD_TWEET'
}

export const setLoandingStatusFetchTweets = (payload: LoadingStatus): SetLoandingStatusFetchTweets => ({type:TweetsActionType.SET_LOADING_STATUS_FETCH_TWEETS, payload})
export const setTweets = (payload: TweetsState['tweets']): SetTweetsActionType => ({type:TweetsActionType.SET_TWEETS, payload})
export const fetchTweets = (): FetchTweetsActionType => ({type: TweetsActionType.FETCH_TWEETS})
export const addTweet = (payload: string): AddTweetType => ({type: TweetsActionType.ADD_TWEET, payload})
export const setAddTweet = (payload: Tweet): FetchAddTweetType => ({type: TweetsActionType.SET_ADDED_TWEET, payload})
export const setLoadingStatusAddTweet = (payload: LoadingStatus) => ({type: TweetsActionType.SET_LOADING_STATUS_ADD_TWEET, payload })
export interface FetchTweetsActionType extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_TWEETS,
}

export interface SetTweetsActionType extends Action<TweetsActionType> {
    type: TweetsActionType.SET_TWEETS,
    payload: TweetsState["tweets"],
}

export interface FetchTweetsActionType extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_TWEETS,
}

export interface SetLoandingStatusFetchTweets extends Action<TweetsActionType> {
    type:TweetsActionType.SET_LOADING_STATUS_FETCH_TWEETS,
    payload: LoadingStatus
}

export interface AddTweetType extends Action<TweetsActionType>{
    type: TweetsActionType.ADD_TWEET,
    payload: string
}

export interface FetchAddTweetType extends Action<TweetsActionType>{
    type: TweetsActionType.SET_ADDED_TWEET,
    payload: Tweet
}

export interface SetLoadingStatusAddTweet extends Action<TweetsActionType> {
    type: TweetsActionType.SET_LOADING_STATUS_ADD_TWEET,
    payload: LoadingStatus
}

export type TweetsActions = SetTweetsActionType | SetLoandingStatusFetchTweets | FetchTweetsActionType | AddTweetType | FetchAddTweetType | SetLoadingStatusAddTweet