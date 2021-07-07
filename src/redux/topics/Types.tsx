
export interface Topics {
    _id:string,
    title: string,
    tag: string,
    count: string,

}
export enum LoadingStatus {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERORR = 'ERROR',
    NEVER = "NEVER",
}

export interface TopicsState {
    topics: Topics[],
    loadingStatus: LoadingStatus
}