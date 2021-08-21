import { axios } from '../core/axios'
import { UserDataType } from '../redux/auth/Types'

interface ResponseApi<T> {
    status: string
    data: T
  }

  export const userApi = {
      getUserInfo: async (userId: string): Promise<ResponseApi<UserDataType>> => {
        const { data } =  await axios.get(`http://localhost:8888/user/${userId}`)
        return data
      }
  }