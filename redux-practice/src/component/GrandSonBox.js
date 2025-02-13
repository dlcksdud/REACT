import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonBox = () => {
    let level = useSelector((state) => state.level);
    
  return (
    <div>GrandSonBox {level}</div>
  )
}

export default GrandSonBox