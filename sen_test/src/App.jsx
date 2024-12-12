import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    // mx-auto my-16 w-11/12 bg-white rounded-lg
    <div className="p-6">
      <div className=" bg-white rounded-lg h-[calc(100vh-48px)] overflow-y-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
