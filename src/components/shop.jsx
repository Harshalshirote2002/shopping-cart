import "./css/shop.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export function Shop() {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json);
        console.log(json);
      });
  }, []);

  return allProducts == null ? (
    <div className="loading-shop">Loading...</div>
  ) : (
    <div className="loaded-shop">
      {allProducts.map((obj) => (
        <div className="card" key={uuidv4()}>
          <div className="image-holder">
            <img key={uuidv4()} src={obj.image}></img>
          </div>
          <div className="general-holder">
            <p className="loaded-shop-title">{obj.title.slice(0, 45)}...</p>
            <div className="item-details">
              <p>Add to Cart</p>
              <p className="loaded-shop-price">${obj.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
