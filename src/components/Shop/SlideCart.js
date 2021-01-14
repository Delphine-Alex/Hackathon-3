import React from 'react'

import './SlideCart.css'

const SlideCart = ({handleState}) => {
  return (
    <div>
      <div className='dark-body' onClick={handleState}>
      </div>
      <div className='slide-cart-container'>
        <div className='slide-cart-wrapper'>
          <h1 className='cart-elems cart-title'>Your Box</h1>
          <h3 className='cart-elems'>Total</h3>
          <h3 className='cart-elems'>Credit Card</h3>
        </div>
      </div>
    </div>
  )
}

export default SlideCart
