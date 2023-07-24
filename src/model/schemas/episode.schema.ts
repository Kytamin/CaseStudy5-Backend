import { Schema, Document, model } from "mongoose";

export interface IEpisode extends Document {
    name: String;
    comic:object
    imgs:[]
}
const episodeSchema: Schema = new  Schema<IEpisode>({
    name: String,
    comic:{type:Schema.Types.ObjectId,ref:"Comic"},
    imgs:[String]
});
const Episode = model<IEpisode>("Episode", episodeSchema,"Episode")
export default Episode