import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ItemList.css";
import inventory from "/public/inventory";

function ItemList({ addToCart, subtractFromCart, searchQuery }) {
  const filteredItems = inventory.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="item-list-container">
      {filteredItems.map(({ id, name, image, prices }) =>
        prices.map((priceItem, index) => (
          <ProductItem
            key={`${id}-${index}`}
            id={id}
            name={name}
            image={image}
            weight={priceItem.weight}
            price={priceItem.price}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;
