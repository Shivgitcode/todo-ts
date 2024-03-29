import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodoContextData from "./context/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoContextData>
    <App />
  </TodoContextData>
);
