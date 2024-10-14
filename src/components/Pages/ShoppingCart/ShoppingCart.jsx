import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

function ShoppingCart({ cart, handleAddToCart, handleSubtractFromCart }) {
  const totalPrice = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  return (
    <div className="shopping-cart-main-container">
      <div className="shopping-cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-list">
          <ul>
            {cart.map(({ index, name, weight, price, quantity }) => (
              <li key={`${name}-${weight}`}>
                <span className="item-name">
                  {name} {weight} kg
                </span>
                <div className="quantity-modifier">
                  <button
                    onClick={() =>
                      handleSubtractFromCart(
                        `${index}-${weight}`,
                        index,
                        name,
                        weight,
                        price,
                        quantity
                      )
                    }
                  >
                    -
                  </button>
                  <span className="item-quantity">{quantity}</span>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        `${index}-${weight}`,
                        index,
                        name,
                        weight,
                        price,
                        quantity
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className="item-price">¥ {price * quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-price-submit">
          <p className="total-price-quantity">
            TOTAL PRICE: <span> ¥ {totalPrice}</span>
          </p>
          <button>Submit Order</button>
        </div>
      </div>
      <Link to="/">
        <button className="go-back-button">Back</button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
