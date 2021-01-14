import React, { useState } from 'react'
import Panier from '../Panier/Panier'


import './SlideCart.css'

const SlideCart = ({ handleState }) => {
  const [total, setTotal] = useState(0)
  return (
    <div>
      <div className='dark-body' onClick={handleState}>
      </div>
      <div className='slide-cart-container'>
        <div className='slide-cart-wrapper'>
          <h1 className='cart-elems cart-title'>YOUR BOX</h1>
          <Panier facture={[total, setTotal]} />
          <h3 className='cart-elems'>TOTAL</h3>
          <p>{total} €</p>
          <h3 className='cart-elems'>PAY</h3>
          <input type="button" value="click here" />
        </div>
      </div>
    </div>
  )
}

export default SlideCart
