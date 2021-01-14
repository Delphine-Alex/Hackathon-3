import React from 'react';
import './Menu.css'

const Menu = (props) => {
    const [state, setState] = props.state;

    const handleState = () => {
        setState(!state)
    }
    return (
    //    <div className='nav-container'>
            <nav className="top-container">
                <ul className='top-container-categories'>
                    <li>Drinks</li>
                    <li>Sweets</li>
                    <li>Snacks</li>
                    <li className='cart-button' type='button' onClick={handleState}>Your Box</li>
                </ul>
            </nav>
        // </div>          
    )
}

export default Menu; 