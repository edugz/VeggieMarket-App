/* Main Dependencies */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "../hooks/CartContext.jsx";
import useSearch from "../hooks/useSearch.js";

/* Components Import */
import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

/* Page-component Import */
import AboutUs from "../Pages/AboutUs/AboutUs";
import Gallery from "../Pages/Gallery/Gallery.jsx";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import Checkout from "../Pages/ShoppingCart/Checkout/Checkout.jsx";
import ThankYouPage from "../Pages/ShoppingCart/Checkout/ThankYouPage/ThankYouPage.jsx";
import NotFound from "../Pages/NotFound/NotFound";
import ScrollToTop from "../Pages/ScrollToTop.jsx";
import LeaveReview from "../Pages/LeaveReview/LeaveReview.jsx";
import ContactUs from "../Pages/ContactUs/ContactUs.jsx";

/**************************************************************/

function App() {
  const { searchQuery, handleSearchChange } = useSearch();

  return (
    <CartProvider>
      <>
        <div className="app-container">
          <Header handleSearchChange={handleSearchChange} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<ItemList searchQuery={searchQuery} />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route
              path="/shopping-cart/checkout"
              element={<Checkout />}
            ></Route>
            <Route path="/thank-you" element={<ThankYouPage />}></Route>

            <Route path="contact-us" element={<ContactUs />} />
            <Route path="/leave-a-review" element={<LeaveReview />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </>
    </CartProvider>
  );
}

export default App;
