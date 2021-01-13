import React, { useState } from 'react'

import useRequest from '../customHooks/useRequest'
import './ProductCard.css'


const ProductCard = () => {
  const [productIndex, setProductIndex] = useState(0)
  const { data } = useRequest('get', '/produits')


  const changeProduct = (e) => {
    if (e.target.value === "next") {
      setProductIndex(productIndex + 1)
    } else {
      setProductIndex(productIndex - 1)
    }
  }

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
        <input type="button" value="previous" onClick={changeProduct} />
        <input type="button" value="next" onClick={changeProduct} />
      </div>
      <img src={'/' + state.photo} alt={state.name} />
    </div>
  )
}

export default ProductCard
