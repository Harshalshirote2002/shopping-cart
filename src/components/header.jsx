import reactIcon from "../assets/react.svg"
import { Link } from "react-router-dom";

export function Header() {
  return <header>
    <img src={reactIcon}></img>
    <div className="nav-elements">
      <Link to = "/">Home</Link>
      <Link to = "shop">Shop</Link>
    </div>
  </header>;
}
