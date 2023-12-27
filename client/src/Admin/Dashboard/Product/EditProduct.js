import React from 'react'
import ProductForm from './ProductForm'

const UpdateProduct = () => {
  return (
      <div>UpdateProduct
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
              <ProductForm btn='Edit' />
          </div>
      </div>
      
  )
}

export default UpdateProduct