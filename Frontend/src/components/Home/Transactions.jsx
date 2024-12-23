import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Transactions = ({ color }) => {
  return (
    <div className={`rounded-lg ${color} p-3 text-white h-[100%]`}>
      <PanelGroup direction="vertical">
        <Panel defaultSize={90} className="p-2">
          History
        </Panel>
        <PanelResizeHandle disabled="true" className="h-2" />
        <Panel
          defaultSize={10}
          className="border-dotted border-2 border-white p-2"
        >
          Donate
        </Panel>
      </PanelGroup>
    </div>
  );
};
