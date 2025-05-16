import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Page/Home";
import AddCoffee from "../Page/AddCoffee";
import UpdateCoffee from "../Page/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
      {
        index : true,
        Component : Home,
        loader : ()=> fetch('http://localhost:2100/coffees')
      },
      {
        path : '/add-coffee',
        Component : AddCoffee
      },
      {
        path : '/update-coffee',
        Component : UpdateCoffee
      },


    ]
  },
]);
