import React from "react";
import { HeaderLink } from "../Utilities/Links/HeaderLink";

export const Header = () => {
  return (
    <div className="flex justify-between pt-2 pr-2">
      {/* Left */}
      <div className="flex justify-between gap-1">
        <HeaderLink title={"Husky Dining"} background={"bg-secondary"} />
        <HeaderLink />
      </div>

      {/* Right */}
      <div className="flex justify-between gap-1">
        <HeaderLink />
        <HeaderLink />
        <HeaderLink />
      </div>
    </div>
  );
};
