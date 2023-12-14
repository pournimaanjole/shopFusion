import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Order = () => {

    const [user,setuser] = useState({})
    const [order,setOrder] = useState([]);

    const loadorders =async () =>{

      const usersid = user._id;
      if(!usersid){
        return
      }
const response = await axios.get(`/order/user/${usersid}`)
setOrder(response?.data?.data);
    }

    useEffect(()=>{
      loadorders();
    },[user])

    useEffect(()=>{
      const userdata = JSON.parse(localStorage.getItem("login")|| "{}")
      if(userdata?.email){
        setuser(userdata)
      }
      else{
        alert("you are not login")
        window.location.href ='/login'
      }
    
    },[])
  return (
    <div>
      <h1>my order</h1>
    <div>
   {
    order.map((orders,index)=>{
      const {product,quantity,status} = orders
return(<>
<p>{product.name}</p>
<h2>{quantity}</h2>
<h3>{status}</h3>
</>)
    })
   }
    </div>
    </div>
  )
}

export default Order
