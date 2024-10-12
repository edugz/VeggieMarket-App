import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCartIcon.css";

function ShoppingCartIcon({ isShrunk, cartCount }) {
  const handleClick = () => {
    console.log("Image clicked!");
  };
  return (
    <div className="shopping-cart-icon-container">
      <h2 className={`cart-count ${!isShrunk ? "shrink" : ""}`}>{cartCount}</h2>
      <Link to="/shopping-cart">
        <img
          src="/images/shopping-cart02.png"
          alt="cart-icon"
          className={`cart-icon ${!isShrunk ? "shrink" : ""}`}
          onClick={handleClick}
        />
      </Link>
    </div>
  );
}

export default ShoppingCartIcon;
