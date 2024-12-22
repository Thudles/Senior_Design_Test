import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import request from "../../Data/request";

export const Request = ({ colspan, rowspan }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true },
    [Autoplay()]
  );

  return (
    <div className={`rounded-lg bg-black p-3 text-black h-[100%] `}>
      <div className="overflow-hidden h-[100%]" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom h-[100%]">
          {request.map((request) => (
            <div className="flex-[0_0_15%] rounded-md min-w-0 bg-white h-[100%] ml-2 p-1">
              {request.priority}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
