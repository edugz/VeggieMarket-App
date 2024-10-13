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
import LeaveReview from "../Pages/LeaveReview/LeaveReview.jsx";
import ContactUs from "../Pages/ContactUs/ContactUs.jsx";

/**************************************************************/

function App() {
  /* Cart Functions Import */
  const {
    cart,
    cartCount,
    productCounts,
    updateCount,
    handleAddToCart,
    handleSubtractFromCart,
  } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (query) => {
    setSearchQuery(query);
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
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="/leave-a-review" element={<LeaveReview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
