import React from 'react';
import './Menu.css'

function Menu () {
    return (
       <div>
        <nav className="top-conteneur">
            <div className="top-conteneur-gauche">
                <h2 className="titre-permanent">Hichi, Ni, San</h2>
            </div>
            <div className="top-conteneur-centre">
                <ul>
                    <li>Candy</li>
                    <li>Drink</li>
                    <li>Snacks</li>
                </ul>
            </div>
            
            <div className="conteneur-droite">
                <button>
                    Panier
                </button>
            </div>
        </nav>
        </div>          
    )
}

export default Menu; 