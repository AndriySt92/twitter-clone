import { combineReducers } from 'redux'
import { tweetsReducer } from './tweets/reducer'

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
})
