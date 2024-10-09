import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import NavbarComp from "../navbar/NavbarComp";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
