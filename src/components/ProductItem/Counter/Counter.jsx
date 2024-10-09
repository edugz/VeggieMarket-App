import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleManualChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setCount(value);
    }
  }

  return (
    <div className="counter-container">
      <button onClick={handleDecrement}>-</button>
      <input value={count} onChange={handleManualChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
