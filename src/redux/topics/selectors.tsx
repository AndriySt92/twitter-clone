import { TopicsState } from './Types'
import {LoadingStatus} from '../Types'
import { RootState } from '../store'

export const getTopics = (state: RootState): TopicsState['topics'] => state.topics.topics
export const getLoadingStatusTopics = (state: RootState): boolean =>
  state.tweets.loadingStatus === LoadingStatus.LOADING
