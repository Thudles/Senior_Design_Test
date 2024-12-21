import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="p-1.5">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default App;
