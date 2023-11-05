import React, { useEffect, useState } from 'react'
import './Buynow.css'
import { json, useParams } from 'react-router-dom'
import axios from 'axios'
const Buynow = () => {
    const {id} = useParams()
    const [quantity,setquantity] = useState(1)
    const [address,setaddress] = useState('')
    const [product,setProduct] = useState({})
    const loadproduct = async () =>{
        const response = await axios.get(`/shop-product/${id}`)
        setProduct(response?.data?.data);
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
        const userdata = JSON.parse(localStorage.getItem('login'))
        const oder ={
            user:userdata._id,
            product:id,
            quantity:quantity,
            address:address
        }
        
    }
  return (
    <div>
      {product.name}
<span onClick={increse}>increase</span>
<span>{quantity}</span>
<span onClick={decrese}>decrese</span>
<input type='text'
 value={address}
 placeholder='enter your address'
  onClick={(e)=>{
setaddress(e.target.value)
}} />
<button onClick={ordernow}>ordernow</button>
    </div>
  )
}

export default Buynow
