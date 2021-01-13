import React from 'react'

import './ProductCard.css'

const ProductCard = ({state}) => {
  return (
    <div className='product-card-wrapper'>
      <div className='product-card-container'>
        <h1 className='product-card-item product-card-title'>{state.name}</h1>
        <h2 className='product-card-item product-card-price'>{state.price}</h2>
        <input 
          className='product-card-item product-card-button'
          type='button' 
          value='Add to box'
        />
      </div>
      <img src={'/' + state.photo} alt={state.name} />
    </div>
  )
}

export default ProductCard
