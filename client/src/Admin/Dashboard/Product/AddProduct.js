import React from 'react'
import ProductForm from './ProductForm'
import { addProduct } from '../../../services/Product'

const Product = () => {

  return (
    <div>
      Product
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center",height:"80vh" }}>
        <ProductForm btn='Add' function={(v)=>addProduct(v)} />
      </div>
    </div>
    
  )
}

export default Product