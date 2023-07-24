import { Schema, Document, model } from "mongoose";

export interface IComic extends Document {
    name: String;
    category: String
    avatar: string
}
const comicSchema: Schema = new Schema<IComic>({
    name: String,
    category: String,
    avatar: String
});
const Comic = model<IComic>("Comic", comicSchema,"Comic")
export default Comic
