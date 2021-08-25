import { string } from 'yup'
import { LoadingStatus } from '../Types'

export interface UserDataType {
  confirmed: boolean
  _id: string
  email: string
  username: string
  fullname: string
  createdAt: string
  about: string
}

export interface UpdateUserInfoType {
  id: string
  avatarUrl?: string
  fullname?: string
  location?: string
  about?: string
  birthday?: string
  website?: string
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
