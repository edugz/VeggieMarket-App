import { useState, useEffect } from "react";

function useCart() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [productCounts, setProductCounts] = useState({});

  useEffect(() => {
console.log("Product counts updated:", productCounts);
  }, [productCounts]);

  const updateCount = (uniqueId, newCount) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [uniqueId]: newCount,
    }));
  };

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

      console.log("Existing Item:", existingItem);

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
          console.log("Removing item from cart:", item);
          return prevCart.filter(
            (cartItem) =>
              !(cartItem.name === item.name && cartItem.weight === item.weight)
          );
        }
      }

      console.log("Item not found in cart, returning previous cart.");
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
    setCart,
    addToCart,
    subtractFromCart,
    addToCount,
    subtractFromCount,
    productCounts,
    setProductCounts,
    updateCount,
  };
}

export default useCart;
