import ShortUniqueId from "short-unique-id";
// import { Path } from "mongoose";
import bcrypt from "bcrypt"
import TextData from "../models/TextData.js";
export const checkPass = async (req,res)=>{
    const {id} = req.params;
    // console.log(id);
    try{
        const doc = await TextData.find({uid: id});
        console.log(doc[0].password)
        if(doc[0].password){
            res.status(200).json({check : 1});
            console.log(1);
        }
        else {
            console.log(0);
            res.status(200).json({check : 0});
        }
    }
    catch{
        res.status(500).json((e)=>e);
    }

}
export const getText = async (req , res) =>{
    console.log("IN SHARE")
    const {id} = req.params;
    // console.log(id);
    try{
        const doc = await TextData.find({uid: id});
        
        res.status(200).json({data : doc[0]});
    }
    catch{
        res.status(500).json((e)=>(e));
    }
    // console.log(doc.password);
    // console.log(req.params.id);
    // res.send(req.params.id);
}