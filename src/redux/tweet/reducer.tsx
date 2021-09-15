import { TweetState } from './Types'
import { LoadingStatus } from '../Types'
import { TweetActions, TweetActionType } from './actions'

const initialTweetsState: TweetState = {
  tweet: null,
  loadingStatus: LoadingStatus.NEVER,
}

export const tweetReducer = (
  state: TweetState = initialTweetsState,
  action: TweetActions,
): TweetState => {
  switch (action.type) {
    case TweetActionType.FETCH_TWEET:
      return {
        ...state,
        loadingStatus: LoadingStatus.LOADING,
      }
    case TweetActionType.SET_TWEET:
      return {
        ...state,
        tweet: action.payload,
        loadingStatus: LoadingStatus.LOADED,
      }
    case TweetActionType.SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.payload,
      }
    case TweetActionType.CLEAN_TWEET_DATA:
      return {
        ...state,
        tweet: null,
        loadingStatus: LoadingStatus.NEVER,
      }
    default:
      return state
  }
}
