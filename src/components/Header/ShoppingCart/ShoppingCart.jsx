import React from "react";
import "./ShoppingCart.css";

function ShoppingCart({ isShrunk }) {
  const handleClick = () => {
    console.log("Image clicked!");
  };
  return (
    <div className="shopping-cart-container">
      <img
        src="/images/shopping-cart02.png"
        alt="cart-icon"
        className={`cart-icon ${!isShrunk ? "shrink" : ""}`}
        onClick={handleClick}
      />
    </div>
  );
}

export default ShoppingCart;
