import React from "react";
import { Menu } from "../../components/Home/Menu";
import { Transactions } from "../../components/Home/Transactions";
import { Navbar } from "../../components/Navbar/Navbar";
import { Request } from "../../components/Home/Request";
import { MenuLoggedout } from "../../components/Home/MenuLoggedout";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Home_logedout = () => {
  return (
    <div className="">
      <Navbar title={"home"} />
      <div className=" rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] mt-[51px]">
        <PanelGroup direction="vertical">
          <Panel defaultSize={70}>
            <Menu color={"bg-primary"} />
          </Panel>

          <PanelResizeHandle disabled={true} className="h-0.5" />

          <Panel defaultSize={30}>
            <PanelGroup direction="horizontal">
              <Panel defaultSize={70}>
                <Request colspan={"col-span-12"} rowspan={"row-span-3"} />
              </Panel>

              <PanelResizeHandle disabled={true} className="w-0.5" />

              <Panel defaultSize={30}>
                <div className="rounded-lg bg-white p-3 text-white h-[100%]"></div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};
