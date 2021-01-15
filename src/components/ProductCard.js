import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import AddToBox from "./AddToBox";

import useRequest from "../customHooks/useRequest";
import SlideCart from "./Shop/SlideCart";
import Nav from "./Nav";

import "./ProductCard.css";
import "./Shop/Shop.css";
import ImageCenter from "./ImageCenter";
import ProductInfos from "./ProductInfos";
import NavArticle from "./NavArticle";
import Burger from "./Burger";

const directionInit = {
  down: false,
  up: false,
  center: false,
};

const ProductCard = ({ match }) => {
  const [productIndex, setProductIndex] = useState(0);
  const [direction, setDirection] = useState(directionInit);
  const [mainDirection, setMainDirection] = useState("down");
  const { data } = useRequest("get", `/categories/${match.params.name}`);
  const [seo, setSeo] = useState({
    categorie: "",
    product: "",
  });

  const changeProduct = (e) => {
    if (e.target.value === "prev") {
      if (productIndex < data.length - 1) {
        setDirection({ ...direction, down: true, center: true });
        setMainDirection("down");
      }
    } else {
      if (productIndex > 0) {
        setDirection({ ...direction, up: true, center: true });
        setMainDirection("up");
      }
    }
  };

  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };

  const changeIndex = () => {
    if (direction.down) {
      setProductIndex(productIndex + 1);
    } else if (direction.up) {
      setProductIndex(productIndex - 1);
    }
    setDirection(directionInit);
  };

  useEffect(() => {
    const wheelScroll = (e) => {
      if (e.deltaY > 0) {
        if (productIndex < data.length - 1) {
          setDirection({ ...direction, down: true, center: true });
          setMainDirection("down");
        }
      } else {
        if (productIndex > 0) {
          setDirection({ ...direction, up: true, center: true });
          setMainDirection("up");
        }
      }
    };

    window.addEventListener("wheel", wheelScroll);

    return () => {
      window.removeEventListener("wheel", wheelScroll);
    };
  }, [productIndex, data.length, direction]);

  useEffect(() => {
    if (match.url) {
      const cat = match.url.split("/")[1];
      const prod = match.url.split("/")[2];
      setSeo({ ...seo, categorie: cat, product: prod });
    }
  }, [match]);

  return (
    <main>
      <Helmet>
        <title>
          Ichi Ni San
          {" " +
            seo.product +
            ` ${data[productIndex] && data[productIndex].name}`}
        </title>
        <meta
          name="description"
          content={`Japanese ${
            seo.product && seo.product
          } imported by ichi ni san from japan ! `}
        />
        <meta
          name="keywords"
          content="japan , product , candies , products , imported , kawai"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="un dos tres"></meta>
        <meta name="url" content="http://www.ichinisan.com"></meta>
        <meta name="coverage" content="Worldwide"></meta>
        <meta name="publisher" content="WCS"></meta>
        <link rel="canonical" href="https://www.ichinisan.com/" />
      </Helmet>
      <div>
        <section
          className="upside"
          style={{
            background: `${data[productIndex] && data[productIndex].gradient}`,
          }}
        >
          <h1 className="title">Ichi Ni San</h1>

          <article className="product-card-container">
            <ProductInfos data={data} productIndex={productIndex} />
            <AddToBox item={data[productIndex]} />
          </article>

          <ImageCenter
            data={data}
            productIndex={productIndex}
            direction={direction}
            changeIndex={changeIndex}
            mainDirection={mainDirection}
          />

          <Nav handleState={handleState} />
          <Burger handleState={handleState} />
        </section>

        {state && <SlideCart handleState={handleState} />}
      </div>
      <div>
        <footer
          className="downside"
          style={{
            background: `url("/${
              data[productIndex] && data[productIndex].background
            }")`,
          }}
        >
          <NavArticle changeProduct={changeProduct} />
        </footer>
      </div>
    </main>
  );
};

export default ProductCard;
