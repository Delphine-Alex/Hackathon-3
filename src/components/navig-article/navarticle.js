import React from 'react';

import './nav-article.css'



function NavArticle ( {changeArticle} ) {




  // const changeProductLeft = (e) => {
  //   if (e.target.value === "next") {
  //        setProductIndex(productIndex - 1);
  //     }
  //   }
  // ;
  //   const changeProductRight = (e) => {
  //   if (e.target.value === "next") {
  //     if (productIndex < data.length - 1) {
  //       setProductIndex(productIndex + 1);

  //     }
  //   } 
  // };




    return (
        <div className="nav-article">
            <input className="left-button" type="button" value="prev" onClick={ (e) => {changeArticle(e)}} />
        <input className="right-button" type="button" value="next" onClick={(e) => { changeArticle(e) }} />
        </div>
    )
        }

export default NavArticle;