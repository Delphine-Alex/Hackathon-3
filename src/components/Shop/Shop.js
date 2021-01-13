import React, {useState} from 'react';
import ProductCard from '../ProductCard'
import SlideCart from './SlideCart'
import './Shop.css';

const Shop = () => {
    const [state, setState] = useState(false)

    const handleState = () => {
        setState(!state)
    }
  

    return (
        <div className='row'>
            <div className="col">
                <div className="upside">
                    <ProductCard />
                    <input className='cart-button' type='button' onClick={handleState} value='Your Box' />
                { state && <SlideCart handleState={handleState} /> }
                </div>
            </div>
            <div className="col">
                <div className="downside"></div>
            </div>
                
        </div>
    )
}

export default Shop;
