
import { UserDataType } from '../auth/Types';
import { LoadingStatus } from '../Types'

export interface UsersStateType {
  users: UserDataType[] | null
  loadingStatus: LoadingStatus
}
