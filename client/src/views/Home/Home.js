import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Productcard from '../../components/Productcard/Productcard'
import Navbar from '../../components/Navbar/Navbar'
import Herosection from '../../components/Herosection/Herosection'
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
    <Navbar/>
    <Herosection/>
      
      
    <div>
    {
        products.map((product, index) => {
          const {_id,name,description, img, price,brand} = product
          return (<>
{/* <Productcard key={index} name={name} description={description} img={img} price={price} brand={brand} id={_id} /> */}
          </>)
        })
      }
    </div>

     
    </div>
  )
}

export default Home
