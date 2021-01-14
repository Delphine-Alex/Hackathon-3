import React from "react";
import { Link } from "react-router-dom";
import ProductQuantity from "./ProductQuantity"

import './Nav.css'

const nav = ({ handleState }) => {
  return (
    <div>
      <nav className="top-container">
        <ul className="top-container-categories">
          <Link to="/categorie/drinks">
            <li>Drinks</li>
          </Link>
          <Link to="/categorie/candies">
            <li>Candies</li>
          </Link>
          <Link to="/categorie/snacks">
            <li>Snacks</li>
          </Link>
          <li onClick={handleState} style={{ cursor: "pointer" }}>
            Your Box
          </li>
          <ProductQuantity />
        </ul>
      </nav>
    </div>
  );
};

export default nav;
