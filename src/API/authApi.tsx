import { axios } from '../core/axios'
import { TweetState } from '../redux/tweet/Types'
import { Tweet, TweetsState } from '../redux/tweets/Types'

interface ResponseTweets<T> {
  status: string
  data: T
}

interface SignUpData {
  fullname: string
  username: string
  email: string
  password: string
  password2: string
}

interface SignInData {
  email: string
  password: string
}

export const authApi = {
  signUp: async (signUpdata: SignUpData): Promise<ResponseTweets<Tweet[]>> => {
    const { data } = await axios.post('/auth/register', signUpdata)
    return data
  },
  signUpVerify: async (confirmHash: string): Promise<ResponseTweets<Tweet>> => {
    const { data } = await axios.get(`//auth/verify?hash=${confirmHash}`)
    return data
  },
  signIn: async (signInData: SignInData): Promise<ResponseTweets<Tweet>> => {
    debugger
    const { data } = await axios.post<ResponseTweets<Tweet>>(
      `http://localhost:8888/auth/login`,
      signInData,
    )
    debugger
    return data
  },
}
