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
  addToCount,
  subtractFromCount,
  addToCart,
  subtractFromCart,
  count,
  updateCount,
  handleAddToCart,
  handleSubtractFromCart,
  handleManualChange,
}) {
  const uniqueId = `${id}-${weight}`;

  const counterProps = {
    count,
    onManualChange: handleManualChange,
    onAdd: () => handleAddToCart(uniqueId, index, name, weight, price, count),
    onSubtract: () => handleSubtractFromCart(uniqueId, name, weight, price, count),
  };

  return (
    <div className="item-container">
      <img src={image} alt="" />
      <h3>
        {name} {weight}kg
      </h3>
      <p>¥ {price}</p>
      <Counter {...counterProps} />
      {count > 0 && (
        <div className="add-to-cart-container">
          <p className="total-p">Total: ¥ {price * count} </p>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
