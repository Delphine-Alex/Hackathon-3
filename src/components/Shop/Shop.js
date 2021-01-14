import React, { useState } from "react";
import ProductCard from "../ProductCard";
import SlideCart from "./SlideCart";
import "./Shop.css";
import ProductQuantity from "../ProductQuantity";

const Shop = () => {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <div className="row">
      {state && <SlideCart handleState={handleState} />}
      <div className="col">
        <ProductCard state={[state, setState]} />
        <ProductQuantity />
      </div>
      <div className="col">
        <div className="downside"></div>
      </div>
    </div>
  );
};

export default Shop;
