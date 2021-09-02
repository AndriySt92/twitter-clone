import { axios } from '../core/axios'
import { UpdateUserInfoType, UserDataType } from '../redux/auth/Types'

interface ResponseApi<T> {
    status: string
    data: T
  }

  export const userApi = {
      getUserInfo: async (userId: string): Promise<ResponseApi<UserDataType>> => {
        const { data } =  await axios.get(`http://localhost:8888/user/${userId}`)
        return data
      },
      updateUserInfo: async (payload: UpdateUserInfoType): Promise<ResponseApi<UserDataType>> => {
        const { data } = await axios.patch(`http://localhost:8888/user/${payload.id}`, payload)
        return data
      },
      getAllUsers: async (): Promise<ResponseApi<UserDataType>> => {
        const {data} = await axios.get('/users')
        return data
      }
  }