import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./css/cart.css";

export function Cart() {
  const { cart, updateCart } = useOutletContext();
  return (
    <>
      <div className="loaded-cart">
        {cart.map((obj) => (
          <div className="card" key={uuidv4()}>
            <div className="image-holder">
              <img key={uuidv4()} src={obj.image}></img>
            </div>
            <div className="general-holder">
              <p className="loaded-cart-title">{obj.title.slice(0, 45)}...</p>
              <div className="item-details">
                <div className="quantity-details">
                  <p
                    className="reduce"
                    id="modify"
                    onClick={() => {
                      obj.count = obj.count - 1;
                      updateCart(cart);
                    }}
                  >
                    -
                  </p>
                  <p className="quantity" id="qu">
                    Quantity: {obj.count}
                  </p>
                  <p
                    className="add"
                    id="modify"
                    onClick={() => {
                      obj.count = obj.count + 1;
                      updateCart(cart);
                    }}
                  >
                    +
                  </p>
                </div>
                <div className="loaded-cart-price">${obj.price * obj.count}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
