import React from "react";
import { Home } from "./Pages/Home/Home";
import { Home_logedout } from "./Pages/Home/Home_logedout";
import { Routes, Route } from "react-router-dom";
import { Account } from "./Pages/Account";
import { Menu } from "./Pages/Menu";
import { Reviews } from "./Pages/Reviews";
import { Request } from "./Pages/Request";
import axiox from "axios";

axiox.defaults.baseURL = "http://localhost:8000/api";
axiox.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="p-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </div>
  );
};

export default App;
