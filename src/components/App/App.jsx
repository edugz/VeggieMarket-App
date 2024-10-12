/* Main Dependencies */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (amount) => {
    setCartCount((prevCount) => prevCount + amount);
  };

  const subtractFromCart = (amount) => {
    setCartCount((prevCount) => prevCount - amount);
  };

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
                addToCart={addToCart}
                subtractFromCart={subtractFromCart}
                searchQuery={searchQuery}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
