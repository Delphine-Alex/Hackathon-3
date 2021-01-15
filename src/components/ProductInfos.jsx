import './ProductCard'

const ProductInfos = ({ data, productIndex }) => {
  return (
    <div>
      <h2 className="product-card-item product-card-title">
        {data[productIndex] && data[productIndex].name}
      </h2>
      <h3 className="product-card-item product-card-description">
        {data[productIndex] && data[productIndex].description}
      </h3>
      <h4 className="product-card-item product-card-price">
        {data[productIndex] && data[productIndex].price} €
      </h4>
    </div>
  );
};

export default ProductInfos;
