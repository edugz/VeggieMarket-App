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
    addToCart,
    subtractFromCart,
    addToCount,
    subtractFromCount,
  } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [productCounts, setProductCounts] = useState({});

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const updateCount = (id, newCount) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount,
    }));
  };

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
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shopping-cart" element={<ShoppingCart cart={cart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
