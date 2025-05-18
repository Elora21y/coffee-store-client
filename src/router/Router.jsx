import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Page/Home";
import AddCoffee from "../Page/AddCoffee";
import UpdateCoffee from "../Page/UpdateCoffee";
import CoffeeDetail from "../components/CoffeeDetail";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import Users from "../components/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
      {
        index : true,
        Component : Home,
        loader : ()=> fetch('https://coffee-store-server-amber-zeta.vercel.app/coffees')
      },
      {
        path : '/add-coffee',
        Component : AddCoffee
      },
      {
        path : '/update-coffee/:id',
        Component : UpdateCoffee,
        loader : ({params}) => fetch(`https://coffee-store-server-amber-zeta.vercel.app/coffees/${params.id}`)
      },
      {
        path : '/coffee-detail/:id',
        Component : CoffeeDetail,
        loader : ({params}) => fetch(`https://coffee-store-server-amber-zeta.vercel.app/coffees/${params.id}`)
      },
      {
        path : '/login',
        Component : Login
      },
      {
        path : '/signup',
        Component : SignUp
      },
      {
        path : '/users',
        Component: Users,
        loader : ()=> fetch('https://coffee-store-server-amber-zeta.vercel.app/users')
      }

    ]
  },
]);
