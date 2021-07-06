export interface Tweets {
    id:string,
    username: string,
    post: string,

}
export enum LoadingStatus {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERORR = 'ERROR',
    NEVER = "NEVER",
}

export interface TweetsState {
    tweets: Tweets[],
    loadingStatus: LoadingStatus
}