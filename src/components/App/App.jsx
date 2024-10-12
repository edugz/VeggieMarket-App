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

/**************************************************************/
/* Code Renderization */

function App() {
  const {
    cart,
    cartCount,
    addToCart,
    subtractFromCart,
    addToCount,
    subtractFromCount,
  } = useCart();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="app-container">
        <Header cartCount={cartCount} handleSearchChange={handleSearchChange} />
        <Routes>
          <Route
            path="/"
            element={
              <ItemList
                addToCount={addToCount}
                subtractFromCount={subtractFromCount}
                searchQuery={searchQuery}
                addToCart={addToCart}
                subtractFromCart={subtractFromCart}
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
