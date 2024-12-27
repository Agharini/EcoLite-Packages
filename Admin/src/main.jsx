// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    index = Math.trunc(index) || 0;
    if (index < 0) index += this.length;
    if (index < 0 || index >= this.length) return undefined;
    return this[index];
  };
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Render the App component inside StrictMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

