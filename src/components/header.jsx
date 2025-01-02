import reactIcon from "../assets/react.svg"
import { Link } from "react-router-dom";

export function Header(props) {
  const cart = props.cart;
  return <header>
    <img src={reactIcon}></img>
    <div className="nav-elements">
      <Link to = "/">Home</Link>
      <Link to = "shop">Shop</Link>
      <Link to = "cart">Cart {cart? cart.reduce((total, current)=>total+current.count, 0): 0}
      </Link>
    </div>
  </header>;
}
