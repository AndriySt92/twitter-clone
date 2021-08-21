import {LoadingStatus} from '../Types'

interface User {
    fullname: string,
    username: string,
    avatarUrl: string
}
export interface Tweet {
    _id:string,
    user: User,
    text: string,
    createdAt: string,
    images: string[]
}


export interface TweetsState {
    tweets: Tweet[]
    userTweets: Tweet[]
    loadingStatusFetchTweets: LoadingStatus
    loadingStatusAddTweet: LoadingStatus
}