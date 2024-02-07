import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import cors from "cors";
// import dotenv from "dotenv";




const app = express()
const port = 3001
app.use(cors());
app.use(bodyParser.urlencoded({extended:true})); 

app.post('/', (req, res) => {
  res.send('Hello World!')
  console.log(req.body.passwrd);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})