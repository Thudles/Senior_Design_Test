import React from "react";

export const Request = ({ colspan, rowspan }) => {
  return (
    <div
      className={` ${colspan} ${rowspan}  rounded-xl border border-black bg-projblack p-3 text-white h-[100%] `}
    >
      Request
    </div>
  );
};
