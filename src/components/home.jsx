import { Link } from "react-router-dom"
// import { useState, useEffect } from "react"

export function Home() {
    // useState(()=>{
    // const [cart, AddToCart] = useState([])
    console.log("I was loaded")
    return <div className="home">
        <div>
            <div className="home-title">Welcome to InstaShop</div>
            <div className="shop-button"><Link to="shop">Shop Now</Link></div>
        </div>
    </div>
}
