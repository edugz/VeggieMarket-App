import React, { useState } from "react";
import { Header } from "./Header";
import { Navbar } from "./navbar/Navbar";
import { ItemList } from "./ItemList";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
