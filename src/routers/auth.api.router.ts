import express from "express";
import Authcontroller from "../controller/auth.controller";
const authApiRouter = express.Router()


authApiRouter.post('/login',(req,res)=>{
    Authcontroller.login(req,res)
})
authApiRouter.post('/register',(req,res)=>{
    Authcontroller.register(req,res)
})

export default authApiRouter