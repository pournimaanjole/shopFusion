import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000


const connectmongodb = async ()=>{
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    if(connect){
        console.log("connected to mongodb");
    }
}

app.listen(PORT, ()=>{
    console.log("server is on ");
    connectmongodb();
})