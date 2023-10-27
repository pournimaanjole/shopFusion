import {  Schema, model } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        default:" -"
    },
    email:{
        type:String,
        required :true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    password:{
        type:Number,
        required:true,
      
    },
    gender:{
        type:String,
        default:"not to say"
    }
},{
    timestamps:true
})

const User = model("User" , userSchema)
export default User