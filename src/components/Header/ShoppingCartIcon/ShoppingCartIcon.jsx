import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../hooks/CartContext";
import "./ShoppingCartIcon.css";

function ShoppingCartIcon() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="shopping-cart-icon-container">
      {cartCount > 0 && <h2 className={`cart-count`}>{cartCount}</h2>}
      <Link to="/shopping-cart">
        <img
          src="/images/shopping-cart02.png"
          alt="cart-icon"
          className={`cart-icon `}
        />
      </Link>
    </div>
  );
}

export default ShoppingCartIcon;
