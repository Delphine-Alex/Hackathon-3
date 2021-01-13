import React from 'react';
import './menu-vertical.css'

function MenuVertical () {
    return (
        <div className="top-navigation">
            <div className="left-menu">
            <h2 className="titre-site">ICHI NI SAN</h2>
            </div>
            <nav className="right-menu">
                <ul className="menu-navigation">
                    <li className="nav-element-1 nav-element">DRINK</li>
                    <li className="nav-element-2 nav-element">Candy</li>
                    <li className="nav-element-3 nav-element">SNACKS</li>
                    <li className="nav-element-4 nav-element-panier">PANIER</li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuVertical;