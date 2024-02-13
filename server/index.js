import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ShortUniqueId from "short-unique-id";
import mongoose from "mongoose";
import { create } from "./controllers/URL.js";
import { getText , checkPass} from "./controllers/FetchData.js";
import { auth } from "./controllers/Auth.js";
import { burnText } from "./controllers/BurnText.js";
// import dotenv from "dotenv";
dotenv.config();

const app = express()
const port = 3001
app.use(cors());
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

app.post('/create', create)
app.post('/auth/:id', auth)
app.get('/check/:id',checkPass)
app.get('/share/:id',getText)
app.get('/burn/:id' , burnText)
/* MONGOOS SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>{
    app.listen(PORT , ()=> console.log(`SERVER PORT : ${PORT}`));
}).catch((error)=>(console.log(`${error} did not connect`)));