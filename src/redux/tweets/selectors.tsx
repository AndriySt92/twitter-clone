import { TweetsState } from './Types'
import { LoadingStatus } from '../Types'
import { RootStateType } from '../store'

export const getTweets = (state: RootStateType): TweetsState['tweets'] => state.tweets.tweets
export const getUserTweets = (state: RootStateType): TweetsState['tweets'] =>
  state.tweets.userTweets
export const getLoadingStatusFetchTweets = (state: RootStateType): boolean =>
  state.tweets.loadingStatusFetchTweets === LoadingStatus.LOADING

export const getLoadingStatusAddTweet = (state: RootStateType): string =>
  state.tweets.loadingStatusAddTweet
