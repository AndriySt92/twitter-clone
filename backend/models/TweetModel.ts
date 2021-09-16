import { model, Schema, Document } from "mongoose";
import { UserSchemaInterface } from "./UserModel";

export interface TweetModelInterface {
    _id?: string;
    text: string;
    images?: string[]
    user: UserSchemaInterface | string
    userIdLiked: string[]
    likeCount: number
}

export type TweetDocumentInterface = TweetModelInterface & Document
const TweetSchema = new Schema<TweetModelInterface>({
    text: {
        required:true,
        maxLength:280,
        type: String
    },
    user: {
        required:true,
        ref: "User",
        type: Schema.Types.ObjectId
    },
    images: {
        type: Array
    },
    likeCount: {
        type: Number
    },
    userIdLiked: {
        type: Array
    }
},{
    timestamps: true
})


export const TweetModel = model<TweetDocumentInterface>('Tweet', TweetSchema)