import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // ✅ IMPORTANTE

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
