import bcrypt, { genSalt } from "bcrypt"
import TextData from "../models/TextData.js";


export const auth = async(req , res) =>{
        console.log("IN AUTH");
        // console.log(req.body);
        const {id} = req.params;
        const pass = req.body.passwrd;
    try{
        // console.log(req.body);
        const doc = await TextData.find({uid: id});
        console.log(doc[0].password)
        // const salt = await bcrypt.genSalt();
        // pass = await bcrypt.hash(req.body.passwrd , salt);
        // console.log("ddsd");
        const valid = await bcrypt.compare(pass , doc[0].password);
        // console.log(valid);
        if(valid){
            res.status(200).json({check : 1});
            // console.log(1);
        }
        else {
            // console.log(0);
            res.status(200).json({check : 0});
        }
    }
    catch{
        // console.log("hellop");  
        res.status(500).json((e)=>({message : e.message}));
    }

}