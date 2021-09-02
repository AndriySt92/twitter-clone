import axios from 'axios'
import { TopicType } from '../redux/topics/Types'

interface ResponseApi<T> {
  status: string
  data: T
}

export const topicsApi = {
  fetchTopics: async (): Promise<ResponseApi<TopicType[]>> => {
    const { data } = await axios.get('/topic')
    return data
  },
}
