import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/index";
import About from "./routes/about.jsx";

import ErrorPage from "./error-page.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/a-propos",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <div>id</div>,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
