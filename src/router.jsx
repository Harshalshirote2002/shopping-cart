import App from "./App";
import { Home } from "./components/home";
import { Shop } from "./components/shop";
import useCartHandler from "./components/cartHandler";

const {cart, addCartItem, removeCartItem} = useCartHandler();

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Home
            cart={cart}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
          />
        ),
      },
      {
        path: "shop",
        element: (
          <Shop
            cart={cart}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
          />
        ),
      },
    ],
  },
];

export default routes;
