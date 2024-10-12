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
}) {
  const uniqueId = `${id}-${weight}`;

  function handleAddToCart() {
    const itemToAdd = {
      key: uniqueId,
      index,
      name,
      weight,
      price,
    };

    addToCart(itemToAdd);
    updateCount(uniqueId, count + 1);
    addToCount(1);
  }

  function handleSubtractFromCart() {
    const itemToSubtract = {
      key: uniqueId,
      name,
      weight,
      price,
      quantity: count,
    };

    subtractFromCart(itemToSubtract);
    updateCount(uniqueId, Math.max(count - 1, 0));
    subtractFromCount(1)
  }

  function handleManualChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      const diff = value - count;
      updateCount(uniqueId, value);
      if (diff > 0) {
        addToCount(diff);
      } else if (diff < 0) {
        subtractFromCount(diff * -1);
      }
    }
  }

  const counterProps = {
    count,
    onManualChange: handleManualChange,
    onAdd: handleAddToCart,
    onSubtract: handleSubtractFromCart,
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
