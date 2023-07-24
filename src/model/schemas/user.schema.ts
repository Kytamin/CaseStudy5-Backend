import {Schema, Document, model} from "mongoose";

 export interface IUser extends Document {
    email: string;
    password: string;
    role: string;
    avatar: string;
}
const userSchema: Schema = new  Schema<IUser>({
    email: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    },
    avatar:  String,
});
const User = model<IUser>('User', userSchema,'User');
export default User;