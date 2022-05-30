import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RegistrationContextProvider } from "./Context/RegistrationContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegistrationContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RegistrationContextProvider>
  </React.StrictMode>
);
