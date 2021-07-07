import {LoadingStatus} from '../Types'

interface User {
    fullname: string,
    username: string,
    avatarUrl: string
}
export interface Tweets {
    _id:string,
    user: User,
    text: string,

}


export interface TweetsState {
    tweets: Tweets[],
    loadingStatus: LoadingStatus
}