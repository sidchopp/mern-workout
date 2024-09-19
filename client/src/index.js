import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider, WorkoutsContextProvider } from "./context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
