import { Link } from "react-router-dom"

export function Home() {

    return <div className="home">
        <div>
            <div className="home-title">Welcome to InstaShop</div>
            <div className="shop-button"><Link to="shop">Shop Now</Link></div>
        </div>
    </div>
}
