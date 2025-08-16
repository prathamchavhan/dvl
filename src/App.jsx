import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/main/Home";
import { Applayout } from "./components/layout/Applayout";
import About from './pages/About';

// or wherever it lives in your project

import { ErrorPage } from "./pages/ErrorPage";
import Policies from './pages/Policies';


import Timepass from "./pages/services/Timepass";

import Carrercoun from "./pages/carrercounselling/Carrercoun";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
    
      { path: "policies", element: <Policies /> },

     
              {path : "services/Timepass",element:<Timepass/>},
            { path: "carrercounselling/Carrercoun", element: <Carrercoun /> },
           

                
    ]
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
