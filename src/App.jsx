import React from "react";
import { Home } from "./Pages/Home/Home";
import { Home_logedout } from "./Pages/Home/Home_logedout";

const App = () => {
  return (
    <div className="p-5 ">
      <Home />
      {/* <Home_logedout /> */}
    </div>
  );
};

export default App;
