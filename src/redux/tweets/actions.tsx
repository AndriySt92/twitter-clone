import { Action } from 'redux';
import {TweetsState} from './Types';

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS'

}

export interface SetTweetsActionType extends Action<TweetsActionType> {
    type: TweetsActionType.SET_TWEETS,
    payload: TweetsState["tweets"],
}
export interface FetchTweetsActionType extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_TWEETS,
}

export const setTweets = (payload: TweetsState['tweets']): SetTweetsActionType => ({type:TweetsActionType.SET_TWEETS, payload})
export const fetchTweets = (): FetchTweetsActionType => ({type: TweetsActionType.FETCH_TWEETS})
export type TweetsActions = SetTweetsActionType