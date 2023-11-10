import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Productcard from '../../components/Productcard/Productcard'
import Navbar from '../../components/Navbar/Navbar'
import Herosection from '../../components/Herosection/Herosection'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Home = () => {
  const [products, setProducts] = useState([])

  const loadproduct = async () => {
    try {
      const response = await axios.get('/shop-product')
      setProducts(response?.data?.data)
    }
    catch (e) {
      console.log(e)
      alert("something wents wrong")
    }
  }
  useEffect(() => {
    loadproduct();
  }, [])
  
  
  return (
    <div>
      <Navbar />
      <Herosection />


<div className='collection'>
  <h1>NEW COLLECTION</h1>
  <hr/>

      <div className='display-product'>
        {
          products.map((product, i) => {
            const {_id, brand, description, name, img,price } = product
            return (<>

             <div className='item'>
              <div className='imgproduct'>
              <img src={img} className='img'  
           
            />
              </div>

              <p>{name}</p>
             <p className='price'>{price}</p>
             <Link to={`/buynow/${_id}`}>buynow</Link>
             </div>

            </>)
          })


        }
      </div>
      </div>

    </div>
  )
}

export default Home
