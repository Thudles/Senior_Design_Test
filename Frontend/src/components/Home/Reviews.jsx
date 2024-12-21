import React from "react";

export const Reviews = ({ color, colspan }) => {
  return (
    <div
      className={`${colspan} row-span-4 rounded-lg ${color} p-3 text-white h-[100%]`}
    >
      Reviews
    </div>
  );
};
