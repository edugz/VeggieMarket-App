import React from "react";
import "./Counter.css";

function Counter({ count, onIncrement, onDecrement, onManualChange }) {
  return (
    <div className="counter-container">
      <button onClick={onDecrement}>-</button>
      <input value={count} onChange={onManualChange} />
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default Counter;
