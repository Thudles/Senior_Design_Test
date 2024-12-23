import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Autoscroll from "embla-carousel-auto-scroll";

import request from "../../Data/request";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Request = ({ colspan, rowspan }) => {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className={`rounded-lg bg-black px-3 pb-3 text-white h-[100%] `}>
      <div className="py-2">Request</div>
      <div className="h-[80%] text-bl">
        <PanelGroup direction="horizontal" className="rounded-md">
          <Panel defaultSize={90}>
            <div className="overflow-hidden h-[100%]" ref={emblaRef}>
              <div className="flex touch-pan-y touch-pinch-zoom h-[100%]">
                {request.map((request) => (
                  <div className="flex-[0_0_15%] rounded-md min-w-0 bg-white text-black h-[100%] ml-2 p-1">
                    {request.priority}
                  </div>
                ))}
              </div>
            </div>
          </Panel>
          <PanelResizeHandle className="w-2" />
          <Panel defaultSize={10}>
            <div className="border-dotted border-2 border-white h-[100%]"></div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};
