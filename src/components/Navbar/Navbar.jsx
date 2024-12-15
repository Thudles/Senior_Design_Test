import React from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { NavButton } from "../Utilities/Button/NavButton";

export const Navbar = () => {
  return (
    <div className="flex flex-col justify-between py-2.5">
      <div className="flex flex-col gap-2">
        <NavButton logo={<FaHome />} />
        <NavButton logo={<FaAlignLeft />} />
      </div>
      <div className="flex flex-col gap-2">
        <NavButton logo={<TfiLayoutPlaceholder />} />
        <NavButton logo={<TfiLayoutPlaceholder />} />
        <NavButton logo={<FaAngleDoubleDown />} />
      </div>
    </div>
  );
};
