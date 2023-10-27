import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json())


import User from './model/user.js';
import Product from './model/product.js';


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
if(finduser){
    res.json({
        success:true,
        data:finduser,
        message:"login succesfully"
    })
}
else{
    res.json({
        success:false,
        message:"not found data"
    })
}
// if(!finduser){
//     return res.json({
//         success:false,
//         message:"email and password are not found"
//     })
// }
// res.json({
//     success:true,
//     data:finduser,
//     meassge:"login successfully"
// })


})


// product ke liye api

// get request 

app.get('/shop-product' , async(req,res)=>{
const products = await Product.find();
res.json({
    success:true,
    data:products,
    message:"products find succesfully"
})
})

// post request 

app.post('/shop-product' , async(req,res)=>{

const {name,description,brand,img,price}  = req.body

const product = new Product({
    name:name,
    description:description,
    price:price,
    img:img,
    brand:brand
})

try{
    const saveproduct = await product.save();

res.json({
    success:true,
    data:saveproduct,
    message:"product save succesfully"
})
}
catch(e) {
    res.json({
        success:false,
       message:e.message
    })
}
})

// get by id

app.get('/shop-product/:_id' , async(req,res)=>{
const {_id} = req.params
const findproduct = await Product.findOne({_id:_id})
res.json({
    success:true,
    data:findproduct,
    message:"product find succesfully"
})
})
// update using put

app.put('/shop-product/:_id' , async(req,res)=>{
const {_id} = req.params
const {name,description,price,brand,img} = req.body
 await Product.updateOne({_id:_id} ,{$set:{
    name:name,
    description:description,
    price:price,
    brand:brand,
    img:img
}})
const updatproduct = await Product.find({_id:_id})
res.json({
    success:true,
    data:updatproduct,
    message:"product update succesfully"
})

})

// delet product 

app.delete('/shop-product/:_id' , async(req,res) =>{
const {_id} = req.params
await Product.deleteOne({_id:_id})
res.json({
    success:true,
    message:"product delete succesfully"
})
})

// search query


app.get('/shop', async (req, res) => {
    const { q } = req.query;

    const productSearch = await Product.findOne({ name: { $regex: q, $options: 'i' } });

    if (productSearch) {
        res.json({
            success: true,
            data: productSearch,
            message: "Product found successfully"
        });
    } else {
        res.json({
            success: false,
            message: "Product not found"
        });
    }
});
// search query 




app.listen(PORT, ()=>{
    console.log(`server is on ${PORT}`);
    connectmongodb();
})