import React from "react";
import "./ShoppingCart.css";

function ShoppingCart({ cart, handleAddToCart, handleSubtractFromCart }) {
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
                  <button
                    onClick={() =>
                      handleSubtractFromCart(
                        `${item.index}-${item.weight}`,
                        item.index,
                        item.name,
                        item.weight,
                        item.price,
                        item.quantity
                      )
                    }
                  >
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        `${item.index}-${item.weight}`,
                        item.index,
                        item.name,
                        item.weight,
                        item.price,
                        item.quantity
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className="item-price">
                  ¥ {item.price * item.quantity}
                </span>
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
    </div>
  );
}

export default ShoppingCart;
