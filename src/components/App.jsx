import React, { useState } from "react";
import Header from "./Header";
import NavbarComp from "./navbar/NavbarComp";
import ItemList from "./ItemList";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <NavbarComp />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
