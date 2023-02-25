import { MuiProvider } from "@providers/MuiProvider";
import { ReactQueryProvider } from "@providers/ReactQueryProvider";
import "main.css";
import { SnackbarProvider } from "@providers/SnackbarProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <MuiProvider>
        <SnackbarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SnackbarProvider>
      </MuiProvider>
    </ReactQueryProvider>
  </React.StrictMode>
);
