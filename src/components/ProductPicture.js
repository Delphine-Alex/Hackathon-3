import React from 'react'

const ProductPicture = ({state}) => {
  console.log(state)
  return (
    <div>
      {/* {state.map((item, i) => {
        return (
        <img src={'/' + item.photo} alt={item.name} />
        )
      })} */}
    </div>
  )
}

export default ProductPicture
