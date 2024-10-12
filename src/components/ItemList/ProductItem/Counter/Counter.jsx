import React from "react";
import "./Counter.css";

function Counter({ count, onManualChange, onSubtract, onAdd }) {
  return (
    <div className="counter-container">
      <button onClick={onSubtract}>-</button>
      <input value={count} onChange={onManualChange} readOnly />
      <button onClick={onAdd}>+</button>
    </div>
  );
}

export default Counter;
