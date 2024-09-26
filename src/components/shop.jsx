import "./css/shop.css";
import { useState, useEffect } from "react";

export function Shop() {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
  }, []);

  return allProducts == null ? (
    <div className="loading-shop">Loading...</div>
  ) : (
    <div className="loaded-shop">
      {allProducts.map((obj, id) => (
        <div className= "card" key={id}>
            <img key={id} src={obj.image}></img>
            <p>{obj.title}</p>
        </div>
      ))}
    </div>
  );
}
