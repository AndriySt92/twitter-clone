import { LoadingStatus } from '../Types'
import { RootStateType } from '../store'
import { AuthStateType } from './Types'


export const getUserData = (state: RootStateType): AuthStateType['userData']  => {
    return state.auth.userData
}

export const getLoadingStatusAuth = (state: RootStateType): LoadingStatus => {
    return state.auth.loadingStatus
}