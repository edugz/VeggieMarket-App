import React, { useState } from "react";
import "./ProductItem.css";
import Counter from "./Counter/Counter";

function ProductItem(props) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    props.addToCart(1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
      props.subtractFromCart(1);
    }
  }

  function handleManualChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      const diff = value - count;
      setCount(value);
      if (diff > 0) {
        props.addToCart(diff);
      } else if (diff < 0) {
        props.subtractFromCart(diff * -1);
      }
    }
  }

  const counterProps = {
    count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onManualChange: handleManualChange,
  };

  return (
    <div className="item-container">
      <img src={props.image} alt="" />
      <h3>
        {props.name} {props.weight}kg
      </h3>
      <p>¥ {props.price}</p>
      <Counter {...counterProps} />
      {count > 0 && (
        <div className="add-to-cart-container">
          <p className="total-p">Total: ¥ {props.price * count} </p>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
