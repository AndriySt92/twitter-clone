import axios from 'axios'
import { TweetState } from '../redux/tweet/Types'
import { Tweet, TweetsState } from '../redux/tweets/Types'

export const tweetsApi = {
  fetchTweets(): Promise<TweetsState['tweets']> {
    return axios.get('/tweets').then((res) => res.data)
  },
  fetchTweetData(tweetId: string): Promise<TweetState['tweet']> {
    return axios.get(`/tweets?_id=${tweetId}`).then((res) => res.data)
  },
  addTweet(tweet: Tweet): Promise<Tweet> {
    return axios.post(`/tweets`,  tweet).then((res) => res.data)
  },
}
