import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "@/pages/Game";
import WaitingRoom from "@/pages/WaitingRoom";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <WaitingRoom />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
