import { TopicsState } from './Types'
import { LoadingStatus } from '../Types'
import { TopicsActions, TopicsActionType } from './actions'

const initialTweetsState: TopicsState = {
  topics: [],
  loadingStatus: LoadingStatus.NEVER,
}

export const topicsReducer = (
  state: TopicsState = initialTweetsState,
  action: TopicsActions,
): TopicsState => {
  switch (action.type) {
    case TopicsActionType.FETCH_TOPICS:
      return {
        ...state,
        topics: [],
        loadingStatus: LoadingStatus.LOADING
      }
    case TopicsActionType.SET_TOPICS:
      return {
        ...state,
        topics: action.payload,
        loadingStatus: LoadingStatus.LOADED
      }
      case TopicsActionType.SET_LOADING_STATUS: 
       return {
         ...state,
         loadingStatus: action.payload
       }
    default:
      return state
  }
}
