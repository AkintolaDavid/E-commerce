import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setcartItem] = useState(getDefaultCart());

  useEffect(() => {
    console.log("Updated cartItem:", cartItem); // Log after state updates
  }, [cartItem]);

  const addtoCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removefromCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItem) {
      const itemId = Number(productId); // Ensure item ID is a number
      const itemInfo = all_product.find((product) => product.id === itemId);

      // Check if item exists in both cartItem and all_product
      if (itemInfo && cartItem[itemId] > 0) {
        totalAmount += itemInfo.new_price * cartItem[itemId];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const productId in cartItem) {
      if (cartItem[productId] > 0) {
        totalItem += cartItem[productId];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    all_product,
    cartItem,
    addtoCart,
    removefromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
