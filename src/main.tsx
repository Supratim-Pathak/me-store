import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Common/Layout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        loader: async () => {
          const product = await fetch(`https://dummyjson.com/products?limit=6`);
          return product.json();
        },
        element: <Home />,
      },
      { path: "/about/:slug", element: <About /> },
      { path: "/product-details", element: <ProductDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
