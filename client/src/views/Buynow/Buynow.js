import React, { useEffect, useState } from 'react'
import './Buynow.css'
import { json, useParams } from 'react-router-dom'
import axios from 'axios'
const Buynow = () => {
    const {id} = useParams()
    const [quantity,setquantity] = useState(1)
     const [product,setProduct] = useState({})
     const [shippingAddress , setShipingAddress] = useState('')

    const loadproduct = async () =>{

        try{
            const response = await axios.get(`/shop-product/${id}`)
            setProduct(response?.data?.data);

        }
        catch(e){
            console.log(e)
        }
        
    }
    useEffect(()=>{
        loadproduct();
    },[])

    const increse = ()=>{
        setquantity(quantity + 1)
    }
    const decrese = () =>{
        if(quantity == 1){
            return
        }
        setquantity(quantity - 1)
    }

    const ordernow = async ()=>{
        const userdata = JSON.parse(localStorage.getItem('login' || '{}'))
        const oder ={
            user:userdata._id,
            product:id,
            quantity:quantity,
            shippingAddress:shippingAddress
        }
try{
    const response = await axios.post('/order' ,oder)
    alert(response?.data?.message)
    if(response?.data?.success){
        window.location.href='/order'
    }
}
catch(e){
    console.log(e)
}

       
        
    }
  return (
    <div>
        <h1>buynow page</h1>
      {product.name}
<span onClick={increse}>increase</span>
<span>{quantity}</span>
<span onClick={decrese}>decrese</span>
<br/>
<input type='text' 
value={shippingAddress}
placeholder='enter your address'
onChange={(e)=>{
setShipingAddress(e.target.value)
}}
/>

<button type='button' onClick={ordernow}>ordernow</button>
    </div>
  )
}

export default Buynow
