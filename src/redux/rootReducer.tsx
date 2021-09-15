import { combineReducers } from 'redux'
import { topicsReducer } from './topics/reducer'
import { tweetsReducer } from './tweets/reducer'
import { tweetReducer } from './tweet/reducer'
import { authReducer } from './auth/reducer'
import { userReducer } from './users/reducer'

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  topics: topicsReducer,
  tweet: tweetReducer,
  auth: authReducer,
  users: userReducer,
})
