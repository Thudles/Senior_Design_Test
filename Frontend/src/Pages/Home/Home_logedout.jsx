import React from "react";
import { Menu } from "../../components/Home/Menu";
import { Transactions } from "../../components/Home/Transactions";
import { Navbar } from "../../components/Navbar/Navbar";
import { Review } from "../../components/Home/Reviews";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Home_logedout = () => {
  return (
    <div className="">
      <Navbar title={"home"} />
      <div className=" rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] mt-[51px]">
        <PanelGroup direction="vertical">
          <Panel defaultSize={80}>
            <Menu color={"bg-primary"} />
          </Panel>

          <PanelResizeHandle disabled={true} className="h-0.5" />

          <Panel defaultSize={20}>
            <PanelGroup direction="horizontal">
              <Panel defaultSize={70}>
                <Review bgcolor={"bg-black"} />
              </Panel>

              <PanelResizeHandle disabled={true} className="w-0.5" />

              <Panel defaultSize={30}>
                <div className="rounded-lg bg-[#fff] p-3 text-white h-[100%]"></div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};
