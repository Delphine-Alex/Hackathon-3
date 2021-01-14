// import React, { useState } from "react";
// import ProductCard from "../ProductCard";
// import SlideCart from "./SlideCart";
// import "./Shop.css";

// import ProductQuantity from "../ProductQuantity";

// // import useRequest from "../../customHooks/useRequest";

// const Shop = () => {
//   const [state, setState] = useState(false);
//   const handleState = () => {
//     setState(!state);
//   };

//   return (
//     <div className="row">
//       <div className="col">
//         <ProductCard />
//         <input
//           className="cart-button"
//           type="button"
//           onClick={handleState}
//           value="Your Box"
//         />
//         <ProductQuantity />
//         {state && <SlideCart handleState={handleState} />}
//       </div>
//       <div className="col">
//         <div className="downside"
//         style={{
//           background: `${data[productIndex] && data[productIndex].background} repeat O O`,
//         }}
//         >
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
