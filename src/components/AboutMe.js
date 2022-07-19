import React from "react";

const AboutMe = () => {
  return (
    <div className="h-[100vh] overflow-hidden flex flex-col  font-semibold px-3 sm:px-0 text-black relative mx-auto container">
      <h1 className="text-[24px] text-center mb-[100px] mt-4">
        About Me
      </h1>
      <div className="font-medium text-[16px] sm:text-[22px]  sm:mt-0">
        Hello, I'm Muhammed Ilan, I'm 15 years old, I'm going to high school now
        and I'm thinking of going to university in the future. I have been
        interested in web technologies for a long time. I am experienced in
        Frontend and Backend. I developed projects. At first in my software
        life, I was developing projects as a full stack developer, but then I
        decided to become a frontend developer and started paying attention to
        the frontend part. Now I am looking for a job, I would love for you to
        hire me.
      </div>
    </div>
  );
};

export default AboutMe;
