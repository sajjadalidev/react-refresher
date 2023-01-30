import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FavoriteContextProvider } from "./store/favorite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // In development React.StrictMood strict react to render twice every time
  // <React.StrictMode>
  <FavoriteContextProvider>
    <App />
  </FavoriteContextProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
