import { Schema,model } from "mongoose";
const popularSchema = new Schema({
    img:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    oldprice:{
        type:Number
    },
    newprice:{
        type:Number
    }
},
{
    timestamps:true
}
)

const Popular = model('Popular' , popularSchema)
export default Popular