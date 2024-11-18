import { useState } from "react";

export default function useCartHandler() {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeCartItem = (itemID) => {
    setCart((prevCart) => {
      prevCart.filter((item) => item.id != itemID);
    });
  };

  return { cart, addCartItem, removeCartItem };
}
