import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DriverProvider } from "./context/DriverContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DriverProvider>
      <App />
    </DriverProvider>
  </BrowserRouter>
);

reportWebVitals();
