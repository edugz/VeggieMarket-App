import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (amount) => {
    setCartCount((prevCount) => prevCount + amount);
  };

  const subtractFromCart = (amount) => {
    setCartCount((prevCount) => prevCount - amount);
  };

  return (
    <div className="app-container">
      <Header cartCount={cartCount} />
      <ItemList addToCart={addToCart} subtractFromCart={subtractFromCart} />
      <Footer />
    </div>
  );
}

export default App;
