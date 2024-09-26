import App from "./App";
import {Home} from "./components/home"
import {Shop} from "./components/shop"

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true, element: <Home/>
            },
            {
                path: "shop",
                element: <Shop/>
            },
        ]
    }
]

export default routes