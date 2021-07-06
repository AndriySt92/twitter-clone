import { TweetsState, LoadingStatus } from './Types'
import { TweetsActions, TweetsActionType } from './actions'

const initialTweetsState: TweetsState = {
  tweets: [],
  loadingStatus: LoadingStatus.NEVER,
}

export const tweetsReducer = (
  state: TweetsState = initialTweetsState,
  action: TweetsActions,
): TweetsState => {
  switch (action.type) {
    case TweetsActionType.SET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      }

    default:
      return state
  }
}
