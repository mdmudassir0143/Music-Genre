import React from "react";
import CenterMenu from "./CenterMenu";

function Footer() {
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </div>
  );
}

export default Footer;
