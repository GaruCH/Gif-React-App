import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifReactApp } from "./GifReactApp.jsx";
import './css/main.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GifReactApp />
  </StrictMode>
);
