import { TweetState } from './Types'
import { LoadingStatus } from '../Types'
import { RootStateType } from '../store'

export const getTweet = (state: RootStateType): TweetState['tweet'] => state.tweet.tweet
export const getLoadingStatusTweet = (state: RootStateType): boolean =>
  state.tweet.loadingStatus === LoadingStatus.LOADING
