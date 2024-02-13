import mongoose from "mongoose";

const TextDataSchema = new mongoose.Schema(
    {
         uid : {
            type : String,
            required : true,         
            unique : true,
         },
         code : {
            type : String,
            require : true,
         },
         password : {
            type : String,
            default : null,
         },
         burn : {
            type : String,
            default : false,
         },
         // expirationTime: { 
         //    type: Date, 
         //    default : Date.now() + (2 * 60),
         //    // required: true 
         // }

         createdAt: {
            type: Date,
            // expires: 120, // Set TTL to 1 day
            default: Date.now,
        },
    },{timestamps : true}
)

const TextData = mongoose.model("TextData" , TextDataSchema);
export default TextData;