import React, { useEffect, useState } from 'react'
import './Buynow.css'
import { json, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
const Buynow = () => {
    const { id } = useParams()
    const [quantity, setquantity] = useState(1)
    const [product, setProduct] = useState({})
    const [shippingAddress, setShipingAddress] = useState('')

    const loadproduct = async () => {

        try {
            const response = await axios.get(`/shop-product/${id}`)
            setProduct(response?.data?.data);

        }
        catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {
        loadproduct();
    }, [])

    const increse = () => {
        setquantity(quantity + 1)
    }
    const decrese = () => {
        if (quantity == 1) {
            return
        }
        setquantity(quantity - 1)
    }

    const ordernow = async () => {
       
            const userdata = JSON.parse(localStorage.getItem('login' || '{}'))
            const oder = {
                user: userdata?._id,
                product: id,
                quantity: quantity,
                shippingAddress: shippingAddress
            }
       

        
       
        try {
            const response = await axios.post('/order', oder)
            alert(response?.data?.message)
            if (response?.data?.success) {
                window.location.href = '/order'
            }
        }
        catch (e) {
            console.log(e)
        }



    }
    return (
        <div> 
            <Navbar/>
            <div className='place-or-container'>
                <div  className='place-or-child'>
                    <img src={product?.img} className='placed-pr-img' />
                </div>

                <div className='place-or-child'> 


                    <div  className='placed-pr-name' > {product.name}</div>
                    <div className='Placed-pr-des'> {product?.description}</div>
                    <div className='placed-or-price'>{product?.price}</div>

                    <div  className='quntity-of-or'> 
                     <span className='quntity-btn' onClick={increse}>+</span>
                        <span className='quntity'>{quantity}</span>
                        <span className='quntity-btn' onClick={decrese}>-</span></div>
              

                <input type='text' className='address-field'
                    value={shippingAddress}
                    placeholder='enter your address'
                    onChange={(e) => {
                        setShipingAddress(e.target.value)
                    }}
                />

                <button type='button' className='placed-or-btn' onClick={ordernow}>ordernow</button>
                </div>
            </div>





        </div>
    )
}

export default Buynow
