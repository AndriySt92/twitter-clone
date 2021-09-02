import { TopicsState } from './Types'
import { LoadingStatus } from '../Types'
import { RootStateType } from '../store'

export const getTopics = (state: RootStateType): TopicsState['topics'] => state.topics.topics
export const getLoadingStatus = (state: RootStateType): LoadingStatus => state.topics.loadingStatus
