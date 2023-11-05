import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import axios from 'axios'


const Popular = () => {
    const [popular,setpopular] = useState([])
    const loadpopular = async ()=>{
        const response = await axios.get ('/popular')
        setpopular(response?.data?.data)
    }
    useEffect(()=>{
        loadpopular();
    },[])

  return (
    <div>
      <h1>popular in women</h1>
<div>
    {
        popular.map((item,index)=>{
            const {img,name,oldprice,newprice} = item
return(<>
<Item key={index} img={img} name={name} oldprice={oldprice} newprice={newprice} />
</>)
        })
    }
</div>
    </div>
  )
}

export default Popular
