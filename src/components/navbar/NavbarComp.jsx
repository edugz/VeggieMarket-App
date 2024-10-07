import React from "react";
import SearchBar from "./SearchBar";
import DropdownItemFilter from "./DropdownItemFilter";
import ShoppingCart from "../shopping-cart/ShoppingCart";

function NavbarComp() {
  return (
    <div>
      <SearchBar />
      <DropdownItemFilter />
      <ShoppingCart />
    </div>
  );
}

export default NavbarComp;
