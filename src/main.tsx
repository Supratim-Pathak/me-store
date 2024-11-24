import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import Layout from "../Components/Common/Layout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "/about/:slug", element: <About /> },
      {
        path: "/product-details/:slug",
        loader: async ({ params }) => {
          const details = await axios.get(
            `https://dummyjson.com/products/${params.slug}`
          );
          return details.data;
        },
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
