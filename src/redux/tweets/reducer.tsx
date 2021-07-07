import { TweetsState } from './Types'
import {LoadingStatus} from '../Types'
import { fetchTweets, TweetsActions, TweetsActionType } from './actions'

const initialTweetsState: TweetsState = {
  tweets: [],
  loadingStatus: LoadingStatus.NEVER,
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
        loadingStatus: LoadingStatus.LOADING
      }
    case TweetsActionType.SET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
        loadingStatus: LoadingStatus.LOADED
      }
      case TweetsActionType.SET_LOADING_STATUS: 
       return {
         ...state,
         loadingStatus: action.payload
       }
    default:
      return state
  }
}
