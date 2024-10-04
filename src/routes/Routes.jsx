import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EstateDetail from "../pages/EstateDetail/EstateDetail";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('/estates.json')
      },
      {
        path: "/estate/:id",
        element: <PrivateRoute><EstateDetail/></PrivateRoute>,
        loader: () => fetch('../estates.json')
      },
      {
        path: "/update",
        element: <PrivateRoute><UpdateProfile/></PrivateRoute>,
        loader: () => fetch('../estates.json')
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
    ]
  }
])

export default router;