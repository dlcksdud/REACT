import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    
    const {id} = useParams();
    // console.log("ppp : ", params); // id값 넘어옴
  return (
    <div>
      <h1>Product Detail{id}</h1>
    </div>
  )
}

export default ProductDetailPage
