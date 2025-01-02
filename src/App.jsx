import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Outlet } from "react-router-dom";
import { useCartHandler } from "./components/cartHandler";

function App() {
  const [cart, addCartItem, updateCart] = useCartHandler();
  
  return (
    <>
      <Header cart={cart}/>
      <Outlet  context = {{cart, addCartItem, updateCart}}/>
      <Footer />
    </>
  );
}

export default App;
