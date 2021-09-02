import { LoadingStatus } from '../Types'
import { RootStateType } from '../store'
import { UsersStateType } from './Types'


export const getUsers = (state: RootStateType): UsersStateType['users']  => {
    return state.users.users
}

export const getLoadingStatus = (state: RootStateType): LoadingStatus => {
    return state.users.loadingStatus
}