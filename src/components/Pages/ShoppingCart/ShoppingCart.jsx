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
            {cart.map((item) => (
              <li key={`${item.name}-${item.weight}`}>
                <span className="item-name">
                  {item.name} {item.weight} kg
                </span>
                <div className="quantity-modifier">
                  <button>-</button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button>+</button>
                </div>
                <span className="item-price">
                  ${item.price * item.quantity}
                </span>
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
