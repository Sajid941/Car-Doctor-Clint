import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import CheckOut from "../pages/CheckOut";
import Cart from "../pages/Cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/checkOut/:id",
          element:<PrivateRoute><CheckOut/></PrivateRoute>,
          loader:({params})=>fetch(`https://car-doctor-server-lyart-nine.vercel.app/service/${params.id}`)
        },
        {
          path:"/cart",
          element:<PrivateRoute><Cart/></PrivateRoute>
        }
      ]
    },
  ]);

  export default router