import ShortUniqueId from "short-unique-id";
// import { Path } from "mongoose";
import bcrypt from "bcrypt"
import TextData from "../models/TextData.js";
export const create = async(req , res) => {
        const { randomUUID } = new ShortUniqueId({ length: 10 });
        const tuid = randomUUID();
        // console.log(req.body);
        // console.log(tuid);
        // res.send(randomUUID());
        // const v = randomUUID();
        // const id = new mongoose.Types.ObjectId(); 
        var passwordHash = "";
        if(passwordHash != req.body.passwrd)
        {
            const salt = await bcrypt.genSalt();
            passwordHash = await bcrypt.hash(req.body.passwrd , salt);
        }
        // console.log(passwordHash);
        const newText = new TextData({
            uid : tuid,
            code : req.body.code,
            password : passwordHash,
            burn : req.body.burn, 
        })
        // newText.path('myCustomTTLField').index({ expires: 60 });

        // newText.index({createdAt : 1} , {expireAfterSeconds : 120});
        var d ;
        switch(req.body.exp){
            case "": 
                d = 28800;break;
            case "eightHours": 
                d = 28800;break;
            case "oneDay": 
                d = 86400;break;
            case "oneWeek": 
                d = 604800;break;
            case "oneMonth": 
                d = 2592000;break;
            case "oneYear": 
                d = 31536000 ;break;
            case "never": 
                d = 31536000 ;break;
        }

        // console.log(newText)
    try{
        await newText.save().then(savedText => {
            console.log('User saved successfully:', savedText);
        })
        .catch(error => {
            console.error('Error saving user:', error.message);
        });
        res.status(200).json({id : tuid});
    }
    catch{
        res.status(500).json((e)=>{e.message});
    }
}

