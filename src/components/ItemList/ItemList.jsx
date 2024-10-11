import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ItemList.css";
import inventory from "/public/inventory";

function ItemList({ addToCart, subtractFromCart, searchQuery }) {
  /* Scroll back to Top of Page whenever it is accessed */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const lowercasedQuery = searchQuery.trim().toLowerCase();

  /* Filter prices to get only those that match the search query */
  const getFilteredPrices = (prices) => {
    return prices.filter(({ weight }) => weight.toString() === lowercasedQuery);
  };

  const renderProductItems = (id, name, image, prices) => {
    const filteredPrices = getFilteredPrices(prices);

    const productItemCommonProps = {
      id,
      name,
      image,
      addToCart,
      subtractFromCart,
    };

    if (filteredPrices.length > 0) {
      return filteredPrices.map((priceItem, index) => (
        <ProductItem
          key={`${id}-${index}`}
          weight={priceItem.weight}
          price={priceItem.price}
          {...productItemCommonProps}
        />
      ));
    }

    /* If no prices match the weight, check if the name matches */
    if (name.toLowerCase().includes(lowercasedQuery)) {
      return prices.map((priceItem, index) => (
        <ProductItem
          key={`${id}-${index}`}
          weight={priceItem.weight}
          price={priceItem.price}
          {...productItemCommonProps}
        />
      ));
    }

    return null; /* Return null if neither match */
  };

  /* If the search query is empty, return the full inventory */
  if (!lowercasedQuery) {
    return (
      <div className="item-list-container">
        {inventory.map(({ id, name, image, prices }) =>
          renderProductItems(id, name, image, prices)
        )}
      </div>
    );
  }

  const filteredItems = inventory.filter(({ name, prices }) => {
    const nameMatches = name.toLowerCase().includes(lowercasedQuery);
    const weightMatches = prices.some(
      ({ weight }) => weight.toString() === lowercasedQuery
    );
    return nameMatches || weightMatches;
  });

  /* Final Renderization of ProductItems */
  return (
    <div className="item-list-container">
      {filteredItems.map(({ id, name, image, prices }) =>
        renderProductItems(id, name, image, prices)
      )}
    </div>
  );
}

export default ItemList;
