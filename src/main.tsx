import { MuiProvider } from "@providers/MuiProvider";
import { RouterProvider } from "@providers/RouterProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MuiProvider>
      <App />
      <RouterProvider />
    </MuiProvider>
  </React.StrictMode>
);
