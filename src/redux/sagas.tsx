import { all } from 'redux-saga/effects'
import { topicsSaga } from './topics/saga'
import { tweetsSaga } from './tweets/saga'
import { tweetSaga } from './tweet/saga'

export default function* rootSaga() {
  yield all([tweetsSaga(), topicsSaga(), tweetSaga()])
}
