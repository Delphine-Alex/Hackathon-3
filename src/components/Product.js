import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

import axios from 'axios'
import ProductPicture from './ProductPicture'

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('/produits');
      setProduct(result.data);
      console.log(result.data);
    };
    getData();
  }, []);

  return (
    <div>
      {product.map((product, i) => {
        return (
        <ProductCard 
          key={i}
          state={{...product}} // replace with data  // replace with data
        />

      )})}
    </div>
  )
}

export default Product
