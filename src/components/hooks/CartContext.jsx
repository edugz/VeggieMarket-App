import React, { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  /* State Controllers */
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [productCounts, setProductCounts] = useState({});

  /* Update Count Function */
  const updateCount = (uniqueId, newCount) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [uniqueId]: newCount,
    }));
  };

  const addToCount = (count) => {
    setCartCount((prevCount) => prevCount + count);
  };

  const subtractFromCount = (count) => {
    setCartCount((prevCount) => Math.max(prevCount - count, 0));
  };

  /* Cart Item Control Functions */
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.name === item.name && cartItem.weight === item.weight
      );

      const newQuantity = existingItem ? existingItem.quantity + 1 : 1;
      updateCount(`${item.name}-${item.weight}`, newQuantity);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name && cartItem.weight === item.weight
            ? { ...cartItem, quantity: newQuantity }
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
        const newQuantity = existingItem.quantity - 1;
        updateCount(`${item.name}-${item.weight}`, Math.max(newQuantity, 0));

        if (newQuantity > 0) {
          return prevCart.map((cartItem) =>
            cartItem.name === item.name && cartItem.weight === item.weight
              ? { ...cartItem, quantity: newQuantity }
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

  /* Handle Cart Item & Count Functions */
  function handleAddToCart(uniqueId, index, name, weight, price) {
    const itemToAdd = {
      key: uniqueId,
      index,
      name,
      weight,
      price,
    };
    addToCart(itemToAdd);
    addToCount(1);
  }

  function handleSubtractFromCart(uniqueId, index, name, weight, price, count) {
    if (count > 0) {
      const itemToSubtract = {
        key: uniqueId,
        index,
        name,
        weight,
        price,
        quantity: count,
      };
      subtractFromCart(itemToSubtract);
      subtractFromCount(1);
    }
  }

  const resetCart = () => {
    setCart([]);
    setCartCount(0);
    setProductCounts({});
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartCount,
        setCartCount,
        productCounts,
        setProductCounts,
        updateCount,
        addToCount,
        subtractFromCount,
        addToCart,
        subtractFromCart,
        handleAddToCart,
        handleSubtractFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
