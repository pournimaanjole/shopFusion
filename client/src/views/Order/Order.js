import React from 'react'
import { useState,useEffect } from 'react'

const Order = () => {

    const [user,setuser] = useState({})

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
   
    </div>
    </div>
  )
}

export default Order
