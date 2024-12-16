import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Menu = () => {
  return (
    <div className="">
      <div className="flex gap-2 justify-between">
        <Navbar />
        <div className="rounded-lg h-[calc(100vh-26px)] overflow-y-auto w-[100%] bg-primary p-3 text-white">
          Menu
        </div>
      </div>
    </div>
  );
};
