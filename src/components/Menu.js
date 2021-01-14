import React from 'react';
import './Menu.css'

function Menu () {
    return (
       <div className='nav-container'>
            <nav className="top-container">
                <div className="top-container-gauche">
                    <h2 className="titre-permanent">Hichi Ni San</h2>
                </div>
                <ul className='top-container-categories'>
                    <li>Candy</li>
                    <li>Drink</li>
                    <li>Snacks</li>
                </ul>
                <div className="container-droite">

                </div>
            </nav>
        </div>          
    )
}

export default Menu; 