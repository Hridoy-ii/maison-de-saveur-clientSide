import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./privateRoute";
import Secret from "../pages/SignUp/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Allusers from "../pages/Dashboard/AllUsers/Allusers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItem/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },

      // admin routes
      {
        path: 'addItems',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: 'users',
        element: <AdminRoutes> <Allusers></Allusers></AdminRoutes>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoutes> <UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  }
]);