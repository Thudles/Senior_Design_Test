import React from "react";
import { Request } from "./Request";

export const Menu = ({ colspan, rowspan }) => {
  return (
    <div
      className={` ${colspan} ${rowspan}  rounded-xl border border-black bg-secondary p-3 h-[100%]  `}
    >
      Menu
    </div>
  );
};
