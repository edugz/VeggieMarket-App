import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../hooks/CartContext.jsx";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { cart, handleAddToCart, handleSubtractFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();
  function handleProceedToCheckout() {
    if (cart.length > 0) {
      navigate("/shopping-cart/checkout");
    } else {
      alert("Your cart is empty! Please add items to proceed to checkout.");
    }
  }

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
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      </div>
      <Link to="/">
        <button className="go-back-button">Back</button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
