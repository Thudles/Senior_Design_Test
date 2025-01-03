import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Account = () => {
  return (
    <div className="">
      <div className="flex gap-2 justify-between">
        <Navbar />
        <div className="rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] bg-secondary p-3 text-white mt-[51px]">
          Account
        </div>
      </div>
    </div>
  );
};
