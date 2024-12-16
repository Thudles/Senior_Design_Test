import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Request = () => {
  return (
    <div className="">
      <div className="flex gap-2 justify-between">
        <Navbar />
        <div className="rounded-lg h-[calc(100vh-26px)] overflow-y-auto w-[100%] bg-projblack p-3 text-white">
          Request
        </div>
      </div>
    </div>
  );
};
