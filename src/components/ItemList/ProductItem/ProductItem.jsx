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
}) {
  const [count, setCount] = useState(0);

  function handleAddToCart() {
    const itemToAdd = {
      key: `${id}-${index}`,
      name,
      weight,
      price,
      quantity: count + 1,
    };
    addToCart(itemToAdd);
    handleIncrement();
  }

  function handleSubtractFromCart() {
    const itemToSubtract = {
      key: `${id}-${index}`,
      name,
      weight,
      price,
      quantity: count,
    };

    subtractFromCart(itemToSubtract);
    handleDecrement();
  }

  function handleIncrement() {
    setCount(count + 1);
    addToCount(1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
      subtractFromCount(1);
    }
  }

  function handleManualChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      const diff = value - count;
      setCount(value);
      if (diff > 0) {
        addToCount(diff);
      } else if (diff < 0) {
        subtractFromCount(diff * -1);
      }
    }
  }

  const counterProps = {
    count,
    onDecrement: handleDecrement,
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
