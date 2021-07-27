import { LoadingStatus } from "../Types";
export interface Topics {
    _id:string,
    title: string,
    tag: string,
    count: string,

}

export interface TopicsState {
    topics: Topics[],
    loadingStatus: LoadingStatus
}