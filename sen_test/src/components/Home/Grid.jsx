import React from "react";
import { Request } from "./Request";
import { Menu } from "./Menu";
import { Account } from "./Account";
import { Balance } from "./Balance";
import { Reviews } from "./Reviews";

export const Grid = () => {
  return (
    <div className="grid gap-3 grid-cols-12">
      <div className="rounded col-span-9 overflow-hidden border border-black h-[calc(100vh-66px)] grid gap-3 grid-cols-12 grid-rows-12">
        <Menu />
        <Request />
      </div>
      <div className="rounded col-span-3 overflow-hidden border border-black grid gap-3 grid-rows-12">
        <Account />
        <Balance />
        <Reviews />
      </div>
    </div>
  );
};
