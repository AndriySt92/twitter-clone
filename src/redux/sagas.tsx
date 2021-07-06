import {all} from 'redux-saga/effects'
import { tweetsSaga } from './tweets/saga'

export default function* rootSaga() {
    yield all([tweetsSaga()])
}