import React from "react";
import { Menu } from "../../components/Home/Menu";
import { Reviews } from "../../components/Home/Reviews";
import { Navbar } from "../../components/Navbar/Navbar";
import { Request } from "../../components/Home/Request";
import { MenuLoggedout } from "../../components/Home/MenuLoggedout";

export const Home_logedout = () => {
  return (
    <div className="">
      <div className="flex  gap-2">
        <Navbar />
        <div className=" bg-black rounded-lg h-[calc(100vh-48px)]  p-2 overflow-y-auto w-[100%]">
          <div className="grid gap-3 grid-cols-12 grid-rows-10 h-[calc(100vh-66px)]">
            <div className=" col-span-12 row-span-6 overflow-hidden">
              <MenuLoggedout />
            </div>
            <div className="grid grid-cols-4 gap-3 col-span-12 row-span-4 overflow-hidden">
              <Request colspan={"col-span-2"} rowspan={"row-span-4"} />
              <Reviews color={"bg-primary"} colspan={"col-span-2"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
