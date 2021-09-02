import { all } from 'redux-saga/effects'
import { topicsSaga } from './topics/saga'
import { tweetsSaga } from './tweets/saga'
import { tweetSaga } from './tweet/saga'
import { authSaga } from './auth/saga'
import { usersSaga } from './users/saga'

export default function* rootSaga() {
  yield all([tweetsSaga(), topicsSaga(), tweetSaga(), authSaga(), usersSaga()])
}
