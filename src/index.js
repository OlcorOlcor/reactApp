import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import "./styles.css";

import App from "./pages/App";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import Increase from "./pages/Increase";
import Decrease from "./pages/Decrease";


const root = createRoot(document.getElementById("root"));

export default function Router() {
  const [count, changeCounter] = useState(0);
  function IncreaseCounter() {
    changeCounter(count + 1);
  }
  function DecreaseCounter() {
    changeCounter(count - 1);
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout count={count}/>}>
          <Route index element={<App />}/>
          <Route path="article" element={<Article />} />
          <Route path="increase" element={<Increase fun={IncreaseCounter}/>} />
          <Route path="decrease" element={<Decrease fun={DecreaseCounter}/>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);