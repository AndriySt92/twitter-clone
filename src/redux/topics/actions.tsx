import { Action } from 'redux'
import { TopicsState } from './Types'
import { LoadingStatus } from '../Types'

export enum TopicsActionType {
  SET_TOPICS = 'topics/SET_TOPICS',
  FETCH_TOPICS = 'topics/FETCH_TOPICS ',
  SET_LOADING_STATUS = 'topics/SET_LOADING_STATUS',
}

export const setLoandingStatus = (payload: LoadingStatus): SetLodingStatus => ({
  type: TopicsActionType.SET_LOADING_STATUS,
  payload,
})
export const setTopics = (payload: TopicsState['topics']): SetTopicsActionType => ({
  type: TopicsActionType.SET_TOPICS,
  payload,
})
export const fetchTopics = (): FetchTopicsActionType => ({ type: TopicsActionType.FETCH_TOPICS })

export interface FetchTopicsActionType extends Action<TopicsActionType> {
  type: TopicsActionType.FETCH_TOPICS
}

export interface SetTopicsActionType extends Action<TopicsActionType> {
  type: TopicsActionType.SET_TOPICS
  payload: TopicsState['topics']
}

export interface SetLodingStatus extends Action<TopicsActionType> {
  type: TopicsActionType.SET_LOADING_STATUS
  payload: LoadingStatus
}

export type TopicsActions = SetTopicsActionType | SetLodingStatus | FetchTopicsActionType
