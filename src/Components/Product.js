import React from 'react';
import './../Style/product.css';

function Product({ name, weight, price, brand }) {
  return (
    <div className="product">
      <div>/////////////////////////</div>
      <div>// tu bedzie zdj //</div>
      <div>////////////////////////</div>
      <h1>{name}</h1>
      <h1>{weight}</h1>
      <h1>{price}</h1>
      <h1>{brand}</h1>
    </div>
  );
}

export default Product;
