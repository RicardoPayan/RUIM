import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import PaginaRegistros from "./components/PaginaRegistros";
import Forms from "./components/Forms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "registro",
        element: <PaginaRegistros />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
