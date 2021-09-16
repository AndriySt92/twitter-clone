import { Tweet, TweetsState } from './Types'
import { LoadingStatus } from '../Types'
import { TweetsActions, TweetsActionType } from './actions'

const initialTweetsState: TweetsState = {
  tweets: [],
  userTweets: [],
  loadingStatusFetchTweets: LoadingStatus.NEVER,
  loadingStatusAddTweet: LoadingStatus.NEVER,
}

export const tweetsReducer = (
  state: TweetsState = initialTweetsState,
  action: TweetsActions,
): TweetsState => {
  switch (action.type) {
    case TweetsActionType.FETCH_TWEETS:
      return {
        ...state,
        tweets: [],
        loadingStatusFetchTweets: LoadingStatus.LOADING,
      }
    case TweetsActionType.SET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
        loadingStatusFetchTweets: LoadingStatus.LOADED,
      }
    case TweetsActionType.SET_LOADING_STATUS_FETCH_TWEETS:
      return {
        ...state,
        loadingStatusFetchTweets: action.payload,
      }
    case TweetsActionType.SET_ADDED_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
        loadingStatusAddTweet: LoadingStatus.LOADED,
      }
    case TweetsActionType.SET_LOADING_STATUS_ADD_TWEET:
      return {
        ...state,
        loadingStatusAddTweet: action.payload,
      }
    case TweetsActionType.SET_USER_TWEETS:
      return { ...state, userTweets: action.payload }
    case TweetsActionType.SET_UPDATED_TWEET:
      let allTweets = state.tweets.map((tweet: Tweet) => {
        if (tweet._id === action.payload._id) {
          return {
            ...tweet,
            text: action.payload.text,
          }
        }
        return tweet
      })
      return {
        ...state,
        tweets: allTweets as Tweet[],
      }
    case TweetsActionType.SET_LIKE_TWEET:
      let tweets = state.tweets.map((tweet: Tweet) => {
        if (tweet._id === action.payload._id) {
          return {
            ...tweet,
            likeCount: action.payload.likeCount,
            userIdLiked: action.payload.likeCount,
          }
        }
        return tweet
      })
      return {
        ...state,
        tweets: tweets as Tweet[],
      }
    default:
      return state
  }
}
