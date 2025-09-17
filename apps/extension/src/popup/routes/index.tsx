import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RootLayout } from "../layout";
import { Home, Lofi, Settings } from "../pages";
import { useEffect } from "react";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/lofi",
        element: <Lofi />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <Redirect />,
  },
]);
