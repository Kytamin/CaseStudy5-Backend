import User from "../model/schemas/user.schema";
import jwt from "jsonwebtoken"
import JWTConfig from "../config/jwt.config";


class Authcontroller {
    static async login(req: any, res: any) {
        try {
            const { email, password } = req.body;
            const user = await User.find({ email, password });
            if (user.length === 0) {
                const data = {
                    status: 'error',
                    message: 'Account does not exist'
                }
                return res.json(data)
            } else {
                // Generate an access token
                const payload = {
                    email: user[0].email,
                    role: user[0].role,
                    id: user[0]._id
                }
                const accessToken = jwt.sign(payload, JWTConfig.accessTokenSecret);
                res.json({ payload, accessToken });
            }
        } catch (err) {
            console.log(err);
        }

    }
    static async register(req, res) {
        try{
            const { email, password } = req.body;
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            res.status(500).json({
                message: "this account has been existed"
            })
        } else {
            let newUser = new User(req.body)
            await newUser.save()
            res.status(200).json({
                message: "register success"
            })
        }
        }catch(err){
            console.log(err);
        }
    }

}
export default Authcontroller