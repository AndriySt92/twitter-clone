import { model, Schema, Document } from "mongoose";
import { UserSchemaInterface } from "./UserModel";

export interface TweetModelInterface {
    _id?: string;
    text: string;
    user: UserSchemaInterface | string
}

export type TweetDocumentInterface = TweetModelInterface & Document
const TweetSchema = new Schema<TweetModelInterface>({
    _id: {
        unique: true,
        type: String
    },
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
})


export const TweetModel = model<TweetDocumentInterface>('Tweet', TweetSchema)