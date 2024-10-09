import React from "react";
import "./App.css";
import Header from "../Header/Header";
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
