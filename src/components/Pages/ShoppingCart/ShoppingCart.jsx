import React from "react";
import "./ShoppingCart.css";

function ShoppingCart({ cart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="shopping-cart-main-container">
      <div className="shopping-cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-list">
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span className="item-name">
                  {item.name} {item.weight} kg
                </span>
                <span className="item-quantity">{item.quantity}</span>
                <span className="item-price">${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-price-submit">
          <p>TOTAL PRICE: ${totalPrice}</p>
          <button>Submit Order</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
