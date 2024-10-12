import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.key === item.key
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
    console.log(cart);
  };

  const subtractFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.key === item.key
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map((cartItem) =>
            cartItem.key === item.key
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          return prevCart.filter((cartItem) => cartItem.key !== item.key);
        }
      }
      return prevCart;
    });
  };

  const addToCount = (amount) => {
    setCartCount((prevCount) => prevCount + amount);
  };

  const subtractFromCount = (amount) => {
    setCartCount((prevCount) => prevCount - amount);
  };

  return {
    cart,
    cartCount,
    addToCart,
    subtractFromCart,
    addToCount,
    subtractFromCount,
  };
}

export default useCart;
