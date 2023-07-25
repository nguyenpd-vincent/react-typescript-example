import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import "./index.css";
import App from "./App";
import React from "react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </React.StrictMode>
);
