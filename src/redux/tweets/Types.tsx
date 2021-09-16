import { UserDataType } from '../auth/Types'
import { LoadingStatus } from '../Types'

export interface Tweet {
  _id: string
  user: UserDataType
  text: string
  createdAt: string
  images: string[]
  likeCount: string | number
  userIdLiked: string[]
}

export interface TweetsState {
  tweets: Tweet[]
  userTweets: Tweet[]
  loadingStatusFetchTweets: LoadingStatus
  loadingStatusAddTweet: LoadingStatus
}
