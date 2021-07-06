import axios from 'axios'
import { TweetsState } from '../redux/tweets/Types'

export const tweetsApi = {
  fetchTweets(): Promise<TweetsState['tweets']> {
    return axios.get('/tweets').then((res) => res.data)
  },
}
