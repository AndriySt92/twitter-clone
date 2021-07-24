
import { string } from 'yup/lib/locale'
import { LoadingStatus } from '../Types'

export interface UserDataInterface {
  confirmed: boolean
  _id: string
  email: string
  username: string
  fullname: string
}

export interface SignInInterface {
  email: string;
  password: string
}

export interface AuthState {
  userData: UserDataInterface | null
  loadingStatus: LoadingStatus
}
