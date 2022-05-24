import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Intro from "./Intro";
import No from "./No";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="app" element={<App />} />
      <Route path="no" element={<No />} />
    </Routes>
  </BrowserRouter>
);
