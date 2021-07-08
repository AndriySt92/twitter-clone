import { Tweet } from '../tweets/Types'
import { LoadingStatus } from '../Types'

export interface TweetState {
  tweet: Tweet | null
  loadingStatus: LoadingStatus
}
