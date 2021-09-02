import { model, Schema, Document } from "mongoose";

export interface TopicModelInterface {
    topic: string;
    tag: string
    tweetCount: string
}

export type TopicDocumentInterface = TopicModelInterface & Document
const TopicSchema = new Schema<TopicModelInterface>({
    // _id: {
    //     type: String
    // },
    topic: {
        required:true,
        type: String
    },
    tag: {
        required:true,
        type: String
    },
    tweetCount: {
        required:true,
        type: String
    }
},{
    timestamps: true
})


export const TopicModel = model<TopicDocumentInterface>('Topic', TopicSchema)

