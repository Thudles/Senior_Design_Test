import React from "react";

export const Reviews = ({ color, colspan }) => {
  return (
    <div
      className={` ${colspan} row-span-4 rounded-xl border border-black ${color} p-3 text-white`}
    >
      Reviews
    </div>
  );
};
