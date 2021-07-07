import { TweetsState } from './Types'
import {LoadingStatus} from '../Types'
import { RootState } from '../store'

export const getTweets = (state: RootState): TweetsState['tweets'] => state.tweets.tweets
export const getLoadingStatusTweets = (state: RootState): boolean =>
  state.tweets.loadingStatus === LoadingStatus.LOADING
