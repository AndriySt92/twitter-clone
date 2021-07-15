import { TweetsState } from './Types'
import { LoadingStatus } from '../Types'
import { RootState } from '../store'

export const getTweets = (state: RootState): TweetsState['tweets'] => state.tweets.tweets
export const getLoadingStatusFetchTweets = (state: RootState): boolean =>
  state.tweets.loadingStatusFetchTweets === LoadingStatus.LOADING

export const getLoadingStatusAddTweet = (state: RootState): string =>
  state.tweets.loadingStatusAddTweet
