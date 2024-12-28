import { useState } from "react";

export function useCartHandler() {
  const [cart, setCart] = useState([]);

  const addCartItem = (newItem) => {
    let matchFound = false
    for(let item of cart){
      if (item.id == newItem.id){
        item.count = item.count + 1
        matchFound = true
        setCart((prevCart) => [...prevCart]);
        break
      }
    }
    if (!matchFound){
      newItem.count = 1
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  
  const updateCart = (items) =>{
    setCart([...items])
  }

  return [cart, addCartItem, updateCart ];
}
