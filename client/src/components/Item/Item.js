import React from 'react'

const Item = (img,name,oldprice,newprice) => {
  return (
    <div>
      <img src={img} />
      <p>{name}</p>
      <p>{oldprice}</p>
      <p>{newprice}</p>
    </div>
  )
}

export default Item
