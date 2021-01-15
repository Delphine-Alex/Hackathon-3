import React, { useState } from "react";
import Panier from "../Panier/Panier";
import { NavLink } from "react-router-dom";

import "./SlideCart.css";

const SlideCart = ({ handleState }) => {
  const [total, setTotal] = useState(0);
  return (
    <div>
      <div className="dark-body" onClick={handleState}></div>
      <div className="slide-cart-container">
        <div className="slide-cart-wrapper">
          <nav>
            <h2>CATEGORIES</h2>
            <ul>
              <NavLink activeClassName="nav-active" to="/categorie/drinks">
                <li>DRINKS</li>
              </NavLink>
              <NavLink activeClassName="nav-active" to="/categorie/candies">
                <li>CANDIES</li>
              </NavLink>
              <NavLink activeClassName="nav-active" to="/categorie/snacks">
                <li>SNACKS</li>
              </NavLink>
            </ul>
          </nav>
          <h3 className="cart">BOX</h3>
          <h4 className="cart-elems cart-title">YOUR BOX</h4>
          <Panier facture={[total, setTotal]} />
          <h5 className="cart-elems">TOTAL</h5>
          <p>{total} €</p>
          <h6 className="cart-elems">PAY</h6>
          <input type="button" value="Click here" />
        </div>
      </div>
    </div>
  );
};

export default SlideCart;
