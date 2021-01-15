import React from "react";
import { NavLink } from "react-router-dom";
import ProductQuantity from "./ProductQuantity"

import './Nav.css'

const nav = ({ handleState }) => {
  return (
    <div>
      <nav className="top-container">
        <ul className="top-container-categories">
          <NavLink activeClassName='nav-active' to="/categorie/drinks">
            <li className='li-item'>Drinks</li>
          </NavLink>
          <NavLink activeClassName='nav-active' to="/categorie/candies">
            <li className='li-item' >Candies</li>
          </NavLink>
          <NavLink activeClassName='nav-active' to="/categorie/snacks">
            <li className='li-item'>Snacks</li>
          </NavLink>
          <li className='li-item' onClick={handleState} style={{ cursor: "pointer" }}>
            Your Box
          </li>
          <ProductQuantity />
        </ul>
      </nav>
    </div>
  );
};

export default nav;
