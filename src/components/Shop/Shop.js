import React, { useState } from "react";
import ProductCard from "../ProductCard";
import SlideCart from "./SlideCart";
import NavArticle from '../navig-article/nav-article'
import "./Shop.css";
import ProductQuantity from "../ProductQuantity";

const Shop = () => {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <div className="row">
      <div className="col">
        <ProductCard />
        <input
          className="cart-button"
          type="button"
          onClick={handleState}
          value="Your Box"
        />
        <ProductQuantity />
        {state && <SlideCart handleState={handleState} />}
      </div>
      <div className="col">
        <NavArticle />
        <div className="downside">

        </div>
      </div>
    </div>
  );
};

export default Shop;
