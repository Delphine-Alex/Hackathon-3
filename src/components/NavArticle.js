import React from 'react'

import './NavArticle.css'

const NavArticle = ({changeProduct}) => {
  return (
    <div className='next-prev-container'>
      <input className='next-prev-item left-button' type='button' value='prev' onClick={changeProduct} />
      <input className='next-prev-item right-button' type='button' value='next' onClick={changeProduct} /> 
    </div>
  )
}

export default NavArticle
