import React, { useState } from 'react';
import useRequest from "../../customHooks/useRequest";

import './nav-article.css'



function NavArticle ( ) {

    const [productIndex, setProductIndex] = useState(0);
    const { data } = useRequest("get", "/categories/drinks");





  const changeProductLeft = (e) => {
    if (e.target.value === "up") {
         setProductIndex(productIndex - 1);
      }
    }
  ;
    const changeProductRight = (e) => {
    if (e.target.value === "down") {
      if (productIndex < data.length - 1) {
        setProductIndex(productIndex + 1);

      }
    } 
  };

  const changeIndex = () => {
    if ({changeProductRight}) {
      setProductIndex(productIndex + 1);
    } else if ({changeProductLeft}) {
      setProductIndex(productIndex - 1);
    }
  };



    return (
        <div className="nav-article">
        {/* <img
          src={data[productIndex - 1] && data[productIndex - 1].photo}
          alt={data[productIndex - 1] && data[productIndex - 1].name}
          className="previous-image"
           
        />
        <img
          src={data[productIndex] && data[productIndex].photo}
          alt={data[productIndex] && data[productIndex].name}
          className="main-image"
          
        />
        <img
          src={data[productIndex + 1] && data[productIndex + 1].photo}
          alt={data[productIndex + 1] && data[productIndex + 1].name}
          className="next-image"
         
        /> */}
            <input className="left-button" type="button" value="up" onClick={changeProductLeft} />
          <input className="right-button" type="button" value="down" onClick={changeProductRight} />
        </div>
    )
        }

export default NavArticle;