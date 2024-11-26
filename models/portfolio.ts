import { Schema, Document, ObjectId } from "mongoose";

export interface IPortfolio {
    _id?: ObjectId | string | undefined;
    title: string;
    location: string;
    date: string;
    slug: string;
    coverImage: string;
    cardImage: string;
    porfolioImages: string[];
    description: string;
}

//@ts-ignore
export interface IPortfolioSchema extends Document {
    _id?: ObjectId | string | undefined;
    title: string;
    location: string;
    date: string;
    slug: string;
    coverImage: string;
    cardImage: string;
    porfolioImages: string[];
    description: string;
}

const PortfolioSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        location: { type: String, required: true },
        date: { type: String, required: true },
        slug: { type: String, required: true },
        coverImage: { type: String, required: true },
        cardImage: { type: String, required: true },
        porfolioImages: { type: Array, required: true },
        description: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default PortfolioSchema;
