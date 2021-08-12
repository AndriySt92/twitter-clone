import { axios } from '../core/axios'
import { SignInType, SignUpType, UserDataType } from '../redux/auth/Types'

interface ResponseApi<T> {
  status: string
  data: T
}

export const authApi = {
  signUp: async (signUpData: SignUpType): Promise<ResponseApi<UserDataType>> => {
    const { data } = await axios.post('http://localhost:8888/auth/register', signUpData)
    return data
  },
  signUpVerify: async (confirmHash: string): Promise<ResponseApi<UserDataType>> => {
    const { data } = await axios.get(`http://localhost:8888/auth/verify?hash=${confirmHash}`)
    return data
  },
  signIn: async (signInData: SignInType): Promise<ResponseApi<UserDataType>> => {
    const user = {
      username: signInData.email,
      password: signInData.password,
    }
    const { data } = await axios.post<ResponseApi<UserDataType>>(
      `http://localhost:8888/auth/login`,
      user,
    )
    return data
  },
  getMe: async (): Promise<ResponseApi<UserDataType>> => {
    const { data } = await axios.get(`http://localhost:8888/user/me`)
    return data
  }
}
