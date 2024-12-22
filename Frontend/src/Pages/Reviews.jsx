import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Reviews = () => {
  return (
    <div className="">
      <div className="flex gap-2 justify-between">
        <Navbar />
        <div className="rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] bg-black p-3 text-white mt-[51px]">
          Reviews
        </div>
      </div>
    </div>
  );
};
