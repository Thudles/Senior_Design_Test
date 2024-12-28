import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import request from "../../../backend/Data/dummyRequest";

export const Request = () => {
  return (
    <div className="">
      <Navbar />
      <div className="rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] bg-black p-3 text-white mt-[51px]">
        <div className="flex gap-1">
          {request.map((request) => (
            <div>{request.priority}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
