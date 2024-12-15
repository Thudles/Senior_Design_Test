import React from "react";
import { Menu } from "../../components/Home/Menu";
import { Balance } from "../../components/Home/Balance";
import { Reviews } from "../../components/Home/Reviews";
import { Navbar } from "../../components/Navbar/Navbar";
import { Request } from "../../components/Home/Request";

export const Home = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="flex gap-2 justify-between">
        <Navbar />
        <div className=" bg-black rounded-lg h-[calc(100vh-48px)]  p-2 overflow-y-auto w-[100%] grid gap-3 grid-cols-12">
          {/* Request and Review */}
          <div className=" col-span-9 overflow-hidden grid gap-3 grid-rows-12">
            <Request colspan={"col-span-12"} rowspan={"row-span-3"} />
            <Menu colspan={"col-span-12"} rowspan={"row-span-9"} />
          </div>

          {/* Accoun and Review */}
          <div className="rounded col-span-3 overflow-hidden  grid gap-3 grid-rows-12">
            <Balance />
            <Reviews color={"bg-projblack"} />
          </div>
        </div>
      </div>
    </div>
  );
};
