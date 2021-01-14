import React, {useState} from 'react';
import SlideCart from './Shop/SlideCart'
import './Menu.css'

function Menu () {
    const [state, setState] = useState(false);

    const handleState = () => {
        setState(!state)
    }
    return (
       <div className='nav-container'>
            <nav className="top-container">
                <div className="top-container-title">
                    <h2 className="titre-permanent">Hichi ni San</h2>
                </div>
                <ul className='top-container-categories'>
                    <li>Drinks</li>
                    <li>Sweets</li>
                    <li>Snacks</li>
                    <li className='cart-button' type='button' onClick={handleState}>Your Box
                        { state && <SlideCart handleState={handleState} /> }
                    </li>
                </ul>
                <div className="container-droite">

                </div>
            </nav>
        </div>          
    )
}

export default Menu; 