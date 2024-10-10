import React from "react";
import "./Counter.css";

function Counter({
  count,
  onIncrement,
  onDecrement,
  onManualChange,
  addToCart,
  subtractFromCart,
}) {
  function handleIncrementAndAdd() {
    addToCart(1);
    onIncrement();
  }

  function handleDecrementAndSubtract() {
    if (count > 0) {
      subtractFromCart(1);
    }
    onDecrement();
  }
  return (
    <div className="counter-container">
      <button onClick={handleDecrementAndSubtract}>-</button>
      <input value={count} onChange={onManualChange} />
      <button onClick={handleIncrementAndAdd}>+</button>
    </div>
  );
}

export default Counter;
