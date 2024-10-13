/* Main Dependencies */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import useCart from "../hooks/useCart.js";

/* Components Import */
import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

/* Page-component Import */
import AboutUs from "../Pages/AboutUs/AboutUs";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import NotFound from "../Pages/NotFound/NotFound";
import ScrollToTop from "../Pages/ScrollToTop.jsx";

/**************************************************************/
/* Code Renderization */

function App() {
  const {
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
  } = useCart();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  /************/

  function handleAddToCart(uniqueId, index, name, weight, price, count) {
    const itemToAdd = {
      key: uniqueId,
      index,
      name,
      weight,
      price,
    };

    addToCart(itemToAdd);
    updateCount(uniqueId, count + 1);
    addToCount(1);
  }

  function handleSubtractFromCart(uniqueId, name, weight, price, count) {
    if (count > 0) {
      const itemToSubtract = {
        key: uniqueId,
        name,
        weight,
        price,
        quantity: count,
      };

      subtractFromCart(itemToSubtract);
      updateCount(uniqueId, Math.max(count - 1, 0));
      subtractFromCount(1);
    }
  }

  function handleManualChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      const diff = value - count;
      updateCount(uniqueId, value);
      if (diff > 0) {
        addToCount(diff);
      } else if (diff < 0) {
        subtractFromCount(diff * -1);
      }
    }
  }
  /************/

  return (
    <>
      <div className="app-container">
        <Header cartCount={cartCount} handleSearchChange={handleSearchChange} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <ItemList
                addToCount={addToCount}
                cartCount={cartCount}
                setCartCount={setCartCount}
                subtractFromCount={subtractFromCount}
                searchQuery={searchQuery}
                addToCart={addToCart}
                subtractFromCart={subtractFromCart}
                productCounts={productCounts}
                updateCount={updateCount}
                handleAddToCart={handleAddToCart}
                handleSubtractFromCart={handleSubtractFromCart}
                handleManualChange={handleManualChange}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={cart}
                addToCart={addToCart}
                updateCount={updateCount}
                addToCount={addToCount}
                subtractFromCart={subtractFromCart}
                subtractFromCount={subtractFromCount}
                setCart={setCart}
                productCounts={productCounts}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
