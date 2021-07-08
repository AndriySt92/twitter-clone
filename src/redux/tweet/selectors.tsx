import { TweetState } from './Types'
import {LoadingStatus} from '../Types'
import { RootState } from '../store'

export const getTweet = (state: RootState): TweetState['tweet'] => state.tweet.tweet
export const getLoadingStatusTweet = (state: RootState): boolean =>
  state.tweets.loadingStatus === LoadingStatus.LOADING
