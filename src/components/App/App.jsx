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
    cart,
    addToCart,
    subtractFromCart,
    addToCount,
    subtractFromCount,
    productCounts,
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
                searchQuery={searchQuery}
                updateCount={updateCount}
                productCounts={productCounts}
                handleAddToCart={handleAddToCart}
                handleSubtractFromCart={handleSubtractFromCart}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleSubtractFromCart={handleSubtractFromCart}
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
