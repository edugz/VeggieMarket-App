import React, { useState } from "react";
import "./ProductItem.css";
import Counter from "./Counter/Counter";

function ProductItem({
  index,
  weight,
  price,
  id,
  name,
  image,
  productCounts,
  handleAddToCart,
  handleSubtractFromCart,
}) {
  const uniqueId = `${name}-${weight}`;

  const counterProps = {
    productCounts,
    onAdd: () =>
      handleAddToCart(uniqueId, index, name, weight, price, productCounts),
    onSubtract: () =>
      handleSubtractFromCart(
        uniqueId,
        index,
        name,
        weight,
        price,
        productCounts[uniqueId]
      ),
    uniqueId,
  };

  return (
    <div className="item-container">
      <img src={image} alt="" />
      <h3>
        {name} {weight}kg
      </h3>
      <p>¥ {price}</p>
      <Counter {...counterProps} />
      {productCounts > 0 && (
        <div className="add-to-cart-container">
          <p className="total-p">Total: ¥ {price * productCounts} </p>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
