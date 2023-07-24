import { Any } from "typeorm"
import Comic from "../model/schemas/comic.schema"
import Episode from "../model/schemas/episode.schema"
class Admincontroller {
    static async addComic(req, res) {
        const { name, category, avatar } = req.body
        let commic = await Comic.findOne({ name: name })
        if (!commic) {
            let newComic = new Comic({
                name: name,
                category: category,
                avatar: avatar
            })
            await newComic.save()
            res.status(200).json({
                message: "add success"
            })
        } else {
            res.status(500).json({
                message: "the commic has been exist"
            })
        }
    }
    static async getListComic(req, res) {
        try {
            let comicList = await Comic.find()
            if (comicList) {
                res.status(200).json(comicList)
            }else{
                res.status(500).json({
                    message:"Failed"
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
    static async getComicDetail(req,res){
        try{
            let comic= await Comic.findOne({_id:req.params.id})
        if(comic){
            res.status(200).json(comic)
        }
        }catch(err){
            console.log(err);
        }
    }
    static async getListAdventure(req,res){
        try{
            let list = await Comic.find({category:"adventure"})
        if(list){
            res.status(200).json(list)
        }
        }catch(err){
            console.log(err);
            
        }
    }
    static async getListDetective(req,res){
        try{
            let list = await Comic.find({category:"detective"})
        if(list){
            res.status(200).json(list)
        }
        }catch(err){
            console.log(err);
        }
    }

    static async getListEpisode(req, res) {
        try {
            let episodeList = await Episode.find({ comic: req.params.id })
            if (episodeList) {
                res.status(200).json(episodeList)
            }
        } catch (err) {
            console.log(err);
        }
    }
    static async addEpisode(req: any, res: any) {
        let name = req.body.name
        let comicId = await Comic.findOne({ _id: req.params.id })
        let images = req.body.imgs
        let newEpisode = new Episode({
            name: name,
            comic: comicId,
            imgs: images
        })
        if (newEpisode) {
            await newEpisode.save()
            res.status(200).json({
                message: "add success"
            })
        } else {
            res.status(500).json({
                message: "add failed"
            })
        }
    }
    static async getEpisodeDetail(req,res){
        try{
            let episode = await Episode.findOne({_id:req.params.id})
        if(episode){
            res.status(200).json(episode)
        }
        }catch(err){
            console.log(err);
        }
    }
    static async getKimetsunoyaiba(req,res){
        try{
            let kimetsu = await Comic.findOne({name:"Kimetsunoyaiba"})
        if(kimetsu){
            res.status(200).json(kimetsu)
        }
        }catch(err){
            console.log(err);
            
        }
    }

    

}

export default Admincontroller