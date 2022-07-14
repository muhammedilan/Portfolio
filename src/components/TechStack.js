import React from "react";
import Figma from "../assets/image/Figma-min.png";
import Cloudinary from "../assets/image/Cloudinary-min.png";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
const TechStack = () => {
  const techBtnList = [
    <SiHtml5 className="mx-auto text-[#E44D26] w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiCss3 className="mx-auto text-[#264DE4] w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiJavascript className="mx-auto text-[#F7DF1E]  w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiReact className="mx-auto text-[#61DAFB]  w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiNextdotjs className="mx-auto text-black w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiSass className="mx-auto text-[#CD6799]  w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiTailwindcss className="mx-auto text-[#06B6D4] w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiRedux className="mx-auto text-[#764ABC]  w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiVercel className="mx-auto text-black w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
    <SiNetlify className="mx-auto text-[#2ABCB9] w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />,
  ];

  return (
    <div className="w-full sm:w-1/2 sm:pl-[100px] ">
      <div className="h-full flex relative flex-col mb-[5px]">
        <h1 className="text-center mb-[16px] pt-2 sm:pt-0 font-semibold text-[22px] text-[#0ca6ff]">
          TECH STACK
        </h1>
        <div>
          {techBtnList.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex items-center cursor-pointer w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] md:w-[64px] md:h-[64px] hover:scale-125 mb-[12px] float-left transition duration-200 bg-white mr-[12px] shadow-[0px_4px_40px_0px_rgba(9,9,12,0.2)] text-[#E44D26]   rounded-full"
              >
                {tech}
              </div>
            );
          })}
          <div>
            <div className="flex items-center cursor-pointer w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] md:w-[64px] md:h-[64px]  hover:scale-125 mb-[12px] transition duration-300 bg-white mr-[12px] shadow-[0px_4px_40px_0px_rgba(9,9,12,0.2)] text-[#A259FF] rounded-full">
              <img
                alt="Figma"
                loading="lazy"
                src={Figma}
                className="mx-auto w-[24px] h-[32px] md:w-[24px] md:h-[32px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center cursor-pointer w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] md:w-[64px] md:h-[64px] hover:scale-125 transition float-left mb-[12px] duration-200 bg-white mr-[12px] shadow-[0px_4px_40px_0px_rgba(9,9,12,0.2)] text-[#599636]   rounded-full">
            <SiMongodb className="mx-auto w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />
          </div>
          <div className="flex items-center cursor-pointer w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] md:w-[64px] md:h-[64px] hover:scale-125 float-left transition mb-[12px] duration-200 bg-white mr-[12px] shadow-[0px_4px_40px_0px_rgba(9,9,12,0.2)] text-black   rounded-full">
            <SiExpress className="mx-auto w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />
          </div>

          <div className="flex items-center cursor-pointer w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] md:w-[64px] md:h-[64px] hover:scale-125 float-left transition mb-[12px] duration-200 bg-white mr-[12px] shadow-[0px_4px_40px_0px_rgba(9,9,12,0.2)] text-[#8CC84B]   rounded-full">
            <SiNodedotjs className="mx-auto w-[28px] h-[28px] md:w-[34px] md:h-[34px]" />
          </div>
          <div className="flex items-center cursor-pointer w-[48px] h-[48px] md:w-[64px] md:h-[64px] hover:scale-125 float-left mb-[12px] justify-center transition duration-300 bg-white mr-[12px] shadow-[0px_4px_40px_0px_rgba(9,9,12,0.2)] text-[#A259FF] rounded-full">
            <img
              alt="Cloudinary"
              loading="lazy"
              src={Cloudinary}
              className="w-[28px] h-[24px] sm:w-[32px] sm:h-[26px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
