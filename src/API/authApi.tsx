import { axios } from '../core/axios'
import { UserDataType } from '../redux/auth/Types'
import { Tweet, TweetsState } from '../redux/tweets/Types'

interface ResponseApi<T> {
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
  signUp: async (signUpdata: SignUpData): Promise<ResponseApi<UserDataType>> => {
    const { data } = await axios.post('http://localhost:8888/auth/register', signUpdata)
    return data
  },
  signUpVerify: async (confirmHash: string): Promise<ResponseApi<UserDataType>> => {
    const { data } = await axios.get(`http://localhost:8888/auth/verify?hash=${confirmHash}`)
    return data
  },
  signIn: async (signInData: SignInData): Promise<ResponseApi<UserDataType>> => {
    const user = {
      username: signInData.email,
      password: signInData.password,
    }
    const { data } = await axios.post<ResponseApi<UserDataType>>(
      `http://localhost:8888/auth/login`,
      user,
    )
    debugger
    return data
  },
  getMe: async (): Promise<ResponseApi<UserDataType>> => {
    const { data } = await axios.get(`http://localhost:8888/user/me`)
    return data
  }
}
