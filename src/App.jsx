import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Outlet } from "react-router-dom";
import { useCartHandler } from "./components/cartHandler";

function App() {
  const [cart, addCartItem, removeCartItem] = useCartHandler();
  
  return (
    <>
      <Header />
      <Outlet  context = {{cart, addCartItem, removeCartItem}}/>
      <Footer />
    </>
  );
}

export default App;
