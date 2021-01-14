import React, { useState } from 'react';
import useRequest from "../../customHooks/useRequest";
import './nav-article.css'



function NavArticle() {

    const [productIndex, setProductIndex] = useState(0);
    const { data } = useRequest("get", "/categories/drinks");



    const changeProduct = (e) => {
        if (e.target.value === "next") {
            if (productIndex < data.length - 1) {
                setProductIndex(productIndex + 1);
            }
        } else {
            if (productIndex > 0) {
                setProductIndex(productIndex - 1);
            }
        }
    };

    return (
        <div className="nav-article">
            <input className="left-article" type="button" value="previous" onClick={changeProduct} />
            <input className="right-button" type="button" value="next" onClick={changeProduct} />
        </div>
    )
}

export default NavArticle;