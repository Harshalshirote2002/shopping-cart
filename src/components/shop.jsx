import "./css/shop.css";
import { useState, useEffect } from "react";
// import { json } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function Shop() {
  const [allProducts, setAllProducts] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [categories, setCategories] = useState(null)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((json) => setCategories(["all", ...json]))
  }, [])

  useEffect(() => {
    currentCategory === "all"?
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json);
        console.log(json);
      }):
      fetch(`https://fakestoreapi.com/products//category/${currentCategory}`)
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json);
        console.log(json);
      })
  }, [currentCategory]);

  return (
    <>
      <div className="categories"> Categories
        {categories === null? <></>: categories.map((cat)=>(
          currentCategory===cat ? <p onClick ={()=>setCurrentCategory(cat)} className="in-focus" key={uuidv4()}>{cat}</p>:
          <p onClick ={()=>setCurrentCategory(cat)} key={uuidv4()}>{cat}</p>
        )) }
      </div>
      {allProducts == null ? (
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
                  <p onClick={()=>{console.log(obj)}}>Add to Cart</p>
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
