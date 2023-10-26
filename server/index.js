import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000
import User from './model/user.js';


const connectmongodb = async ()=>{
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    if(connect){
        console.log("connected to mongodb");
    }
}


// post request 
// creating instence

app.post('/users' , async (req,res) =>{
const {name,email,mobile,password,gender,address} = req.body

const userdata = new User ({
    name,email,mobile,password,address,gender
})
try{
    const saveduser = await userdata.save();
res.json({
    success:true,
    data:saveduser,
    message:"succesfully signup"
})

}
catch(error){
    res.json({
        message:error.message
    })
}
})

app.post("/login" , async(req,res)=>{
const {email,password} = req.body
const finduser = await User.findOne({
    email:email,
    password:password
}).select("name email address")
if(!finduser){
    return res.json({
        success:false,
        message:"email and password are not found"
    })
}
res.json({
    success:true,
    data:finduser,
    meassge:"login successfully"
})
})


app.listen(PORT, ()=>{
    console.log("server is on ");
    connectmongodb();
})