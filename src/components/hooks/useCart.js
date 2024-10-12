import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.name === item.name && cartItem.weight === item.weight
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name && cartItem.weight === item.weight
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const subtractFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.name === item.name && cartItem.weight === item.weight
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map((cartItem) =>
            cartItem.name === item.name && cartItem.weight === item.weight
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          return prevCart.filter(
            (cartItem) =>
              !(cartItem.name === item.name && cartItem.weight === item.weight)
          );
        }
      }

      return prevCart;
    });
  };

  const addToCount = (count) => {
    setCartCount((prevCount) => prevCount + count);
  };

  const subtractFromCount = (count) => {
    setCartCount((prevCount) => Math.max(prevCount - count, 0));
  };

  return {
    cartCount,
    setCartCount,
    cart,
    addToCart,
    subtractFromCart,
    addToCount,
    subtractFromCount,
  };
}

export default useCart;
