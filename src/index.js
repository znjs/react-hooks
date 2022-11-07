import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvier } from "./examples/context/counter-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterProvier>
      <App />
    </CounterProvier>
  </React.StrictMode>,
);
