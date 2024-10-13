import React from "react";
import "./Counter.css";

function Counter({ productCounts, onSubtract, onAdd, uniqueId }) {
  return (
    <div className="counter-container">
      <button onClick={onSubtract}>-</button>
      <input value={productCounts[uniqueId] || 0} readOnly />
      <button onClick={onAdd}>+</button>
    </div>
  );
}

export default Counter;
