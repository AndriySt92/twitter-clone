import { LoadingStatus } from "../Types";
export interface TopicType {
    _id:string,
    topic: string,
    tag: string,
    tweetCount: string,

}

export interface TopicsState {
    topics: TopicType[],
    loadingStatus: LoadingStatus
}