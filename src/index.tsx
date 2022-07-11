import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootNode = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceWorker.js").then(
    function (registration) {
      console.log("Service worker registration succeeded:", registration);
    },
    /*catch*/ function (error) {
      console.log("Service worker registration failed:", error);
    }
  );
} else {
  console.log("Service workers are not supported.");
}
