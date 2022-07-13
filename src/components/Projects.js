import React from "react";
import xoxSiteImage from "../assets/image/xox-min.png";

const Projects = () => {
  return (
    <div className="h-[100vh] mx-auto container px-3 sm:px-0">
      <h1 className="text-center font-semibold pt-4 mb-[50px] text-[22px] sm:text-[24px] ">
        My Projects
      </h1>
      <div className="flex flex-col items-center sm:flex-row justify-between">
        <a
          className="w-[320px] h-[290px] hover:scale-110 transition hover:text-[#0ca6ff] duration-200 bg-white rounded-[14px] shadow-2xl "
          href="https://github.com/muhammedilan/Tic-Tac-Toe"
        >
          <img
            className="h-[225px] w-[320px] rounded-[14px] rounded-b-none"
            width={320}
            height={225}
            src={xoxSiteImage}
            loading="lazy"
            alt="Xox Website Image"
          />
          <div className="h-[65px] font-medium flex items-center justify-center text-[17.5px] rounded-[14px] rounded-t-none w-[320px]">
            Javascript Xox Game
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
