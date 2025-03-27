import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import CartList from "./components/CartList/CartList.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Home from "./components/Home/Home.jsx";
import ProductDetails from "./components/Products/ProductDetails.jsx";
import Root from "./components/Root/Root.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import WishList from "./components/WishList/WishList.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>Page Not Found!!</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/product/:product_id",
        loader: () => fetch("/productDB.json"),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard",

        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart-list",
            loader: () => fetch("/productDB.json"),
            element: <CartList />,
          },
          {
            path: "wish-list",
            loader: () => fetch("/productDB.json"),
            element: <WishList></WishList>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
