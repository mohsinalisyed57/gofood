import React from 'react'
import ProductForm from './ProductForm'

const Product = () => {
  return (
    <div>
      Product
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center",height:"80vh" }}>
        <ProductForm btn='Add'/>
      </div>
    </div>
    
  )
}

export default Product