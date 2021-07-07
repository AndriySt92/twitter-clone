import { combineReducers } from 'redux'
import { topicsReducer } from './topics/reducer'
import { tweetsReducer } from './tweets/reducer'

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  topics: topicsReducer
})
