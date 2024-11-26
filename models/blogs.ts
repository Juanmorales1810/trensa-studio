import { Schema, Document, ObjectId } from "mongoose";

export interface IBlog {
    _id?: ObjectId | string | undefined;
    title: string;
    description: string;
    image: string;
    imageCover: string;
    content: object;
    slug: string;
}

//@ts-ignore
export interface IBlogSchema extends Document {
    _id?: ObjectId | string | undefined;
    title: string;
    description: string;
    image: string;
    imageCover: string;
    content: object;
    slug: string;
}

const BlogSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        imageCover: { type: String, required: true },
        content: { type: Object, required: true },
        slug: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default BlogSchema;
