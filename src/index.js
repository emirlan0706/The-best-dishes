import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./page/Favorite";
import Help from "./page/Help";
import Orders from "./page/Orders";
import Wallet from "./page/Wallet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/help" element={<Help />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  </BrowserRouter>
);
