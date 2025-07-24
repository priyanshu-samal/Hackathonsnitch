import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold text-center py-8">Product {id}</h1>
    </div>
  )
}

export default Product 