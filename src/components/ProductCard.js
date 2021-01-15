import React, { useEffect, useState } from "react";

import AddToBox from "./AddToBox";

import useRequest from "../customHooks/useRequest";
import SlideCart from "./Shop/SlideCart";
import Nav from "./Nav";

import "./ProductCard.css";
import "./Shop/Shop.css";
import ImageCenter from "./ImageCenter";
import ProductInfos from "./ProductInfos";

const directionInit = {
  down: false,
  up: false,
  center: false,
};

const ProductCard = ({ match }) => {
  const [productIndex, setProductIndex] = useState(0);
  const [direction, setDirection] = useState(directionInit);
  const [mainDirection, setMainDirection] = useState("down");
  const { data } = useRequest("get", `/categories/${match.params.name}`);

  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
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
    <div>
      <div>
        <div
          className="upside"
          style={{
            background: `${data[productIndex] && data[productIndex].gradient}`,
          }}
        >

            <h1 className='title'>Ichi Ni San</h1>

            <div className='product-card-container'>
              <ProductInfos data={data} productIndex={productIndex} />
              <AddToBox item={data[productIndex]} />
            </div>




          <ImageCenter
            data={data}
            productIndex={productIndex}
            direction={direction}
            changeIndex={changeIndex}
            mainDirection={mainDirection}
          />

          <Nav handleState={handleState} />
        </div>

        {state && <SlideCart handleState={handleState} />}
      </div>
      <div>
        <div
          className="downside"
          style={{
            background: `url("/${
              data[productIndex] && data[productIndex].background
            }")`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductCard;
