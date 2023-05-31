import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

console.log(`아니 왜 안되냐고.. ${process.env.PUBLIC_URL}`);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    </BrowserRouter>
  // </React.StrictMode>
);
