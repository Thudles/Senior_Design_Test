import React from "react";

export const NavButton = ({ logo, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white cursor-pointer hover:scale-105 duration-300 p-5 rounded-md relative z-10 font-bold text-1md`}
    >
      {logo}
    </button>
  );
};
