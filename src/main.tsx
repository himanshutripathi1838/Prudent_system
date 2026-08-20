import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

// On initial page load or hard refresh, reset URL to Home (/) starting view
if (typeof window !== "undefined" && window.location.pathname !== "/") {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  window.history.replaceState(null, "", "/");
}

const router = getRouter();

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
