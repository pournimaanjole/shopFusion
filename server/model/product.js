import { Schema,model } from "mongoose";
const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String
    },
    img:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

const Product = model("Product" , productSchema)
export default Product