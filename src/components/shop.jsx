import "./css/shop.css";
import { useState, useEffect } from "react";
import {useOutletContext} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function Shop() {
  const [allProducts, setAllProducts] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [categories, setCategories] = useState(null);

  const {addCartItem} = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json);
        return new Set(json.map((obj) => obj.category));
      })
      .then((jsonSet) => setCategories(["all", ...jsonSet]));
  }, []);

  const filteredCategory = (category, allProducts) => {
    if (category == "all") {
      return allProducts;
    } else {
      return allProducts.filter((obj) => obj.category == category);
    }
  };

  return (
    <>
      <div className="categories">
        {" "}
        Categories
        {categories === null ? (
          <></>
        ) : (
          categories.map((cat) =>
            currentCategory === cat ? (
              <p
                onClick={() => setCurrentCategory(cat)}
                className="in-focus"
                key={uuidv4()}
              >
                {cat}
              </p>
            ) : (
              <p onClick={() => setCurrentCategory(cat)} key={uuidv4()}>
                {cat}
              </p>
            )
          )
        )}
      </div>
      {allProducts == null ? (
        <div className="loading-shop">Loading...</div>
      ) : (
        <div className="loaded-shop">
          {filteredCategory(currentCategory, allProducts).map((obj) => (
            <div className="card" key={uuidv4()}>
              <div className="image-holder">
                <img key={uuidv4()} src={obj.image}></img>
              </div>
              <div className="general-holder">
                <p className="loaded-shop-title">{obj.title.slice(0, 45)}...</p>
                <div className="item-details">
                  <p
                    onClick={() => {
                      addCartItem(obj)
                    }}
                  >
                    Add to Cart
                  </p>
                  <p className="loaded-shop-price">${obj.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
