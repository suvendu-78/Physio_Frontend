import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLay from "./Applayout/Applay.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Homes = lazy(() => import("./pages/Home.jsx"));
const Service = lazy(() => import("./Pages/Service.jsx"));
const Clinics = lazy(() => import("./Pages/Clinics.jsx"));
const Therapists = lazy(() => import("./Pages/Therapists.jsx"));
const Login = lazy(() => import("./Pages/Login.jsx"));
const Signup = lazy(() => import("./Pages/Signup.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));

const Root = createBrowserRouter([
  {
    path: "/",
    element: <AppLay />,
    children: [
      {
        path: "/",
        element: <Homes />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/clinics",
        element: <Clinics />,
      },
      {
        path: "/therapists",
        element: <Therapists />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <RouterProvider router={Root} />
  </StrictMode>,
);
