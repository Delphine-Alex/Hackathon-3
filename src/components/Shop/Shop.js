import React from 'react';
import ProductCard from '../ProductCard'
import './Shop.css';

const Shop = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="upside">
                    <ProductCard />
                </div>
            </div>
            <div className="col">
                <div className="downside"></div>
            </div>
        </div>
    )
}

export default Shop;
