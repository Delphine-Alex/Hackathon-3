import React from 'react'

import './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className='product-card-wrapper'>
      <div className='product-card-container'>
        <h1 className='product-card-item product-card-title'>{props.title}</h1>
        <h2 className='product-card-item product-card-price'>{props.price}</h2>
        <input 
          className='product-card-item product-card-button'
          type='button' 
          value='Add to box'
        />
      </div>
    </div>
  )
}

export default ProductCard
