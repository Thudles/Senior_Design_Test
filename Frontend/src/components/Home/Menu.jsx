import React from "react";
import { Request } from "./Request";

export const Menu = ({ colspan, rowspan, color }) => {
  return (
    <div
      className={`${colspan} ${rowspan} ${color} rounded-xl  p-3 h-[100%] text-white`}
    >
      Menu
    </div>
  );
};
