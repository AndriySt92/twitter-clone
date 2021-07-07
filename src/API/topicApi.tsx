import axios from 'axios'
import { TopicsState } from '../redux/topics/Types'

export const topicsApi = {
  fetchTopics(): Promise<TopicsState['topics']> {
    return axios.get('/topics').then((res) => res.data)
  },
}