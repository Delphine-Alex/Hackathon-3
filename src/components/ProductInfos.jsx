const ProductInfos = ({ data, productIndex }) => {
  return (
    <div>
      <h1 className="product-card-item product-card-title">
        {data[productIndex] && data[productIndex].name}
      </h1>
      <h2 className="product-card-item product-card-description">
        {data[productIndex] && data[productIndex].description}
      </h2>
      <h2 className="product-card-item product-card-price">
        {data[productIndex] && data[productIndex].price} €
      </h2>
    </div>
  );
};

export default ProductInfos;
