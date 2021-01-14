import React, { useState } from 'react';
import useRequest from "../../customHooks/useRequest";
import './nav-article.css'



function NavArticle () {

    const [productIndex, setProductIndex] = useState(0);
    const [direction, setDirection] = useState(directionInit);
    const { data } = useRequest("get", "/categories/drinks");




    const changeProduct = (e) => {
    if (e.target.value === "next") {
      if (productIndex < data.length - 1) {
        setProductIndex(productIndex + 1);
      }
    } else {
      if (productIndex > 0) {
        setProductIndex(productIndex - 1);
      }
    }
  };

  useEffect(() => {
    const rightclickproduct = (e) => {
      if (e.deltaY > 0) {
        if (productIndex < data.length - 1) {
          setDirection({ ...direction, down: true, center: true });
          setMainDirection("down");
        }
        
      } else {
        if (productIndex > 0) {
          setDirection({ ...direction, up: true, center: true });
          setMainDirection("up");
        }
      }
    };

    return (
        <div className="nav-article">
        <img
          src={data[productIndex - 1] && data[productIndex - 1].photo}
          alt={data[productIndex - 1] && data[productIndex - 1].name}
          className="previous-image"
          style={
            direction.up
              ? { animation: "0.4s linear downnext" }
              : { animation: "inherit" }
          }
        />
        <img
          src={data[productIndex] && data[productIndex].photo}
          alt={data[productIndex] && data[productIndex].name}
          className="main-image"
          style={
            direction.center
              ? { animation: `0.4s linear ${mainDirection}` }
              : { animation: "inherit" }
          }
          onAnimationEnd={changeIndex}
        />
        <img
          src={data[productIndex + 1] && data[productIndex + 1].photo}
          alt={data[productIndex + 1] && data[productIndex + 1].name}
          className="next-image"
          style={
            direction.down
              ? { animation: "0.4s linear upnext" }
              : { animation: "inherit" }
          }
        />
            <input className="left-button" type="button" value="previous" onClick={changeProduct} />
          <input className="right-button" type="button" value="next" onClick={changeProduct} />
        </div>
    )
}

export default NavArticle;