import { axios } from '../core/axios'
import { TweetState } from '../redux/tweet/Types'
import { Tweet, TweetsState } from '../redux/tweets/Types'

interface ResponseTweets<T> {
  status: string;
  data: T
}

export const tweetsApi = {
  fetchTweets: async (): Promise<ResponseTweets<Tweet[]>> => {
    const { data } = await axios.get('/tweets')
    return data
  },
  fetchTweetData: async (tweetId: string): Promise<ResponseTweets<Tweet>> => {
    const { data } = await axios.get(`/tweet/${tweetId}`)
    return data
  },
  addTweet: async (payload: {text: string, images: string[]}): Promise<ResponseTweets<Tweet>> => {
    const { data } = await axios.post<ResponseTweets<Tweet>>(`/tweet`, payload)
    return data
  },
  removeTweet: (tweetId: string): Promise<void> => axios.delete(`/tweet/${tweetId}`),
  updateTweet: (payload: {tweetId: string, text: string}): Promise<void> =>  axios.patch(`/tweet/${payload.tweetId}`, {text: payload.text} )
   
  
}
