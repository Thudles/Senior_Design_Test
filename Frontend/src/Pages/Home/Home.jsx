import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/Home/Menu";
import { Balance } from "../../components/Home/Balance";
import { Reviews } from "../../components/Home/Reviews";
import { Navbar } from "../../components/Navbar/Navbar";
import { Request } from "../../components/Home/Request";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Home = () => {
  const [outerPanelSizes, setOuterPanelSizes] = useState(75); // Default sizes of the outer panels
  const [outerPanelSize, setOuterPanelSize] = useState(25);
  const [requestPanelSize, setRequestPanelSize] = useState(20);
  const [menuPanelSize, setMenuPanelSize] = useState(80);
  const [balancePanelSize, setBalancePanelSize] = useState(67);
  const [reviewPanelSize, setReviewPanelSize] = useState(33);

  const navigate = useNavigate();

  // Size threshold
  const SIZE_THRESHOLD = 91;

  // Check and navigate if any panel exceeds the threshold
  useEffect(() => {
    if (requestPanelSize > SIZE_THRESHOLD && outerPanelSizes > SIZE_THRESHOLD) {
      navigate("/request"); // Navigate to Request page
    } else if (
      menuPanelSize > SIZE_THRESHOLD &&
      outerPanelSizes > SIZE_THRESHOLD
    ) {
      navigate("/menu"); // Navigate to Menu page
    } else if (
      balancePanelSize > SIZE_THRESHOLD &&
      outerPanelSize > SIZE_THRESHOLD
    ) {
      navigate("/account"); // Navigate to Balance page
    } else if (
      reviewPanelSize > SIZE_THRESHOLD &&
      outerPanelSize > SIZE_THRESHOLD
    ) {
      navigate("/review"); // Navigate to Reviews page
    }
  }, [
    requestPanelSize,
    outerPanelSizes,
    menuPanelSize,
    balancePanelSize,
    reviewPanelSize,
    navigate,
  ]);

  return (
    <div className="">
      <div className="flex gap-2 justify-between">
        <Navbar />
        <div className="rounded-lg h-[calc(100vh-26px)] overflow-y-auto w-[100%]">
          <PanelGroup direction="horizontal">
            {/* Request and Menu Panels */}
            <Panel
              defaultSize={75}
              maxSize={SIZE_THRESHOLD + 1}
              onResize={(sizes) => {
                setOuterPanelSizes(sizes); // Track sizes of outer panels
              }}
            >
              <PanelGroup direction="vertical">
                <Panel
                  defaultSize={20}
                  maxSize={SIZE_THRESHOLD + 1}
                  onResize={(size) => setRequestPanelSize(size)}
                >
                  <Request colspan={"col-span-12"} rowspan={"row-span-3"} />
                </Panel>

                <PanelResizeHandle className="h-0.5" />

                <Panel
                  defaultSize={80}
                  maxSize={SIZE_THRESHOLD + 1}
                  onResize={(size) => setMenuPanelSize(size)}
                >
                  <Menu
                    colspan={"col-span-12"}
                    rowspan={"row-span-9"}
                    color={"bg-primary"}
                  />
                </Panel>
              </PanelGroup>
            </Panel>

            <PanelResizeHandle className="w-0.5" />

            {/* Balance and Review Panels */}
            <Panel
              defaultSize={25}
              onResize={(sizes) => {
                setOuterPanelSize(sizes); // Track sizes of outer panels
              }}
              maxSize={SIZE_THRESHOLD + 1}
            >
              <PanelGroup direction="vertical">
                <Panel
                  defaultSize={67}
                  maxSize={SIZE_THRESHOLD + 1}
                  onResize={(size) => setBalancePanelSize(size)}
                >
                  <Balance bgColor={"bg-secondary"} />
                </Panel>

                <PanelResizeHandle className="h-0.5" />

                <Panel
                  defaultSize={33}
                  maxSize={SIZE_THRESHOLD + 1}
                  onResize={(size) => setReviewPanelSize(size)}
                >
                  <Reviews color={"bg-projblack"} />
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </div>
      </div>

      {/* <div className="pt-1">blahh</div> */}
    </div>
  );
};
