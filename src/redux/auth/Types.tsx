import { LoadingStatus } from '../Types'

export interface UserDataType {
  confirmed: boolean
  _id: string
  email: string
  username: string
  fullname: string
  createdAt: string
}

export interface SignUpType {
  fullname: string
  username: string
  email: string
  password: string
  password2: string
}

export interface SignInType {
  email: string
  password: string
}

export interface AuthStateType {
  userData: UserDataType | null
  loadingStatus: LoadingStatus
}
