import React from "react";

export const HeaderLink = ({ link, title, background }) => {
  return (
    <a
      href={`${link}`}
      className={`rounded-sm  px-1 text-black font-bubbly ${background} text-md`}
    >
      {title}
    </a>
  );
};
