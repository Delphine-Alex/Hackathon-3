import React, { useEffect, useState } from 'react'

import useRequest from '../customHooks/useRequest'
import './ProductCard.css'

const ProductCard = () => {
  const [productIndex, setProductIndex] = useState(0)
  const { data } = useRequest('get', '/produits')


  const changeProduct = (e) => {
    if (e.target.value === "next") {
      if (productIndex < data.length) {
        setProductIndex(productIndex + 1)
      }
    } else {
      if (productIndex > 0) {
        setProductIndex(productIndex - 1)
      }
    }
  }

  useEffect(() => {
    const wheelScroll = (e) => {
      if (e.deltaY > 0) {
        if (productIndex < data.length - 1) {
          setProductIndex(productIndex + 1)
        }
      } else {
        if (productIndex > 0) {
          setProductIndex(productIndex - 1)
        }
      }
    }
    window.addEventListener('wheel', wheelScroll)
    return () => {
      window.removeEventListener('wheel', wheelScroll)
    }

  }, [productIndex, data.length])




  return (
    <div className='product-card-wrapper'>
      <div className='product-card-container'>
        <h1 className='product-card-item product-card-title'>{data[productIndex] && data[productIndex].name}</h1>
        <h2 className='product-card-item product-card-price'>{data[productIndex] && data[productIndex].price}</h2>
        <input
          className='product-card-item product-card-button'
          type='button'
          value='Add to box'
        />
        <img src={data[productIndex] && data[productIndex].photo} alt={data[productIndex] && data[productIndex].name} className="main-image" />
        <input type="button" value="previous" onClick={changeProduct} />
        <input type="button" value="next" onClick={changeProduct} />
      </div>
    </div>
  )
}

export default ProductCard
