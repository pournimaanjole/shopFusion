import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Order.css';
import Navbar from '../../components/Navbar/Navbar';
const Order = () => {

  const [user, setuser] = useState({})
  const [order, setOrder] = useState([]);

  const loadorders = async () => {

    const usersid = user._id;
    if (!usersid) {
      return
    }
    const response = await axios.get(`/order/user/${usersid}`)
    setOrder(response?.data?.data);
  }

  useEffect(() => {
    loadorders();
  }, [user])

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("login") || "{}")
    if (userdata?.email) {
      setuser(userdata)
    }
    else {
      alert("you are not login")
      window.location.href = '/login'
    }

  }, [])
  return (
    <div >
      <Navbar />

      <div className='order-div'>

       
        <div className='second-div' >
          {
            order.map((orders, index) => {
              const { product, quantity, status } = orders
              return (<>
              <div className='order-card'>
              <p><span className='span'>Name of Product: </span>{product?.name}</p> 
              <p><span className='span'>Price:  </span>{ product?.price}</p>
                <p><span className='span'>Quantity: </span>{quantity}</p>
                <p className='status'> <span className='span'>Stauts: </span>{status}</p>
              </div>
                
              </>)
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Order
