import express from "express";
import Admincontroller from "../controller/admin.controller";
const adminApiRouter = express.Router()
adminApiRouter.post('/addcomic',(req,res)=>{
    Admincontroller.addComic(req,res)
})
adminApiRouter.post("/addepisode/:id",(req,res)=>{
    Admincontroller.addEpisode(req,res)
})
adminApiRouter.get("/listcomic",(req,res)=>{
    Admincontroller.getListComic(req,res)
})
adminApiRouter.get("/listepisode/:id",(req,res)=>{
    Admincontroller.getListEpisode(req,res)
})
adminApiRouter.get("/listadventure",(req,res)=>{
    Admincontroller.getListAdventure(req,res)
})
adminApiRouter.get("/listdetective",(req,res)=>{
    Admincontroller.getListDetective(req,res)
})
adminApiRouter.get("/comicdetail/:id",(req,res)=>{
    Admincontroller.getComicDetail(req,res)
})
adminApiRouter.get("/episodedetail/:id",(req,res)=>{
    Admincontroller.getEpisodeDetail(req,res)
})
adminApiRouter.get('/kimetsunoyaiba',(req,res)=>{
    Admincontroller.getKimetsunoyaiba(req,res)
})


export default adminApiRouter