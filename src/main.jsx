import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact, Portfolio, LandingPage, ErrorPage, About } from "./pages";

const router = createBrowserRouter([
  {
    path: "RodrigoTBW-Portifolio",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "projects",
        element: <Portfolio />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
