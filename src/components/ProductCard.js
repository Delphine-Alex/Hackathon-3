import React, { useEffect, useState } from "react";

import useRequest from "../customHooks/useRequest";
import "./ProductCard.css";

const directionInit = {
  down: false,
  up: false,
  center: false,
};

const ProductCard = () => {
  const [productIndex, setProductIndex] = useState(0);
  const [direction, setDirection] = useState(directionInit);
  const [mainDirection, setMainDirection] = useState("down");
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

  const changeIndex = () => {
    if (direction.down) {
      setProductIndex(productIndex + 1);
    } else if (direction.up) {
      setProductIndex(productIndex - 1);
    }
    setDirection(directionInit);
  };

  useEffect(() => {
    const wheelScroll = (e) => {
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

    window.addEventListener("wheel", wheelScroll);

    return () => {
      window.removeEventListener("wheel", wheelScroll);
    };
  }, [productIndex, data.length, direction]);

  return (
    <div className="product-card-wrapper">
      <div className="product-card-container">
        <h1 className="product-card-item product-card-title">
          {data[productIndex] && data[productIndex].name}
        </h1>
        <h2 className="product-card-item product-card-price">
          {data[productIndex] && data[productIndex].price}
        </h2>
        <input
          className="product-card-item product-card-button"
          type="button"
          value="Add to box"
        />
        <img
          src={data[productIndex - 1] && data[productIndex - 1].photo}
          alt={data[productIndex - 1] && data[productIndex - 1].name}
          className="previous-image"
          style={
            direction.up
              ? { animation: "0.4s ease-in-out downnext" }
              : { animation: "inherit" }
          }
        />
        <img
          src={data[productIndex] && data[productIndex].photo}
          alt={data[productIndex] && data[productIndex].name}
          className="main-image"
          style={
            direction.center
              ? { animation: `0.4s ease-in-out ${mainDirection}` }
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
              ? { animation: "0.4s ease-in-out upnext" }
              : { animation: "inherit" }
          }
        />
        <input type="button" value="previous" onClick={changeProduct} />
        <input type="button" value="next" onClick={changeProduct} />
      </div>
    </div>
  );
};

export default ProductCard;
