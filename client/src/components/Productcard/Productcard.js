import React from 'react'
import { Link } from 'react-router-dom'

const Productcard = (id,name,description,img ,price,brand) => {
  return (
    <div>
 <img src={img} />
      <p>{name}</p>
      <span>{price}</span>
      <span>{brand}</span>
      <Link to={`/buynow/${id}`}>buy now</Link>
    </div>
  )
}

export default Productcard
