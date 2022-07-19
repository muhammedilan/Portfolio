import React, { useRef } from "react";

const Contact = React.lazy(() => import("./components/Contact"));
const AboutMe = React.lazy(() => import("./components/AboutMe"));
const Projects = React.lazy(() => import("./components/Projects"));
const TechStack = React.lazy(() => import("./components/TechStack"));

function App() {
  const navigationList = ["Home", "Projects", "About Me", "Contact"];

  const homePage = useRef();
  const projectsPage = useRef();
  const aboutMePage = useRef();
  const contactPage = useRef();
  return (
    <div className="overflow-hidden">
      <header className="absolute w-full px-3 sm:px-0  z-10">
        <nav className="mx-auto relative container justify-between items-center flex h-[55px] sm:h-[75px]">
          <div>
            <h1 className="font-semibold text-[18px]">My Portfolio</h1>
          </div>
          <ul className="items-center hidden sm:flex gap-x-3 text-[16px] ">
            {navigationList.map((nav, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    if (index === 0) {
                      homePage.current.scrollIntoView();
                    }
                    if (index == 1) {
                      projectsPage.current.scrollIntoView();
                    }
                    if (index == 2) {
                      aboutMePage.current.scrollIntoView();
                    }
                    if (index == 3) {
                      contactPage.current.scrollIntoView();
                    }
                  }}
                  className="cursor-pointer p-[14px] font-medium hover:text-[#0ca6ff] relative hover:before:w-full before:bg-[#0ca6ff] before:absolute before:bottom-0 before:right-0 hover:before:left-0 before:w-0 before:transition-all before:rounded-full transition duration-300 before:duration-300 before:h-[3px]"
                >
                  {nav}
                </li>
              );
            })}
          </ul>
          <div className="sm:hidden">
            <div
              className="w-[28px] mobileNavBtn flex cursor-pointer z-10 flex-col gap-y-[3px] relative"
              onClick={(e) => {
                e.currentTarget.children[0].classList.toggle("bg-black");
                e.currentTarget.children[0].classList.toggle("bg-[#0ca6ff]");
                e.currentTarget.children[0].classList.toggle("rotate-[-45deg]");
                e.currentTarget.children[0].classList.toggle(
                  "translate-y-[6px]"
                );
                e.currentTarget.children[1].classList.toggle(
                  "translate-x-[-45px]"
                );
                e.currentTarget.children[1].classList.toggle("bg-transparent");

                e.currentTarget.children[2].classList.toggle("bg-black");
                e.currentTarget.children[2].classList.toggle("bg-[#0ca6ff]");
                e.currentTarget.children[2].classList.toggle("rotate-[45deg]");
                e.currentTarget.children[2].classList.toggle(
                  "translate-y-[-6px]"
                );
                let mobileNavDropdown =
                  document.getElementsByClassName("mobileNavDropdown")[0];
                mobileNavDropdown.classList.toggle("hidden");
              }}
            >
              <span className="bg-black w-full transition z-10 duration-300 rounded-full  h-[3px]"></span>
              <span className="bg-black w-full transition z-10 duration-300 rounded-full  h-[3px]"></span>
              <span className="bg-black w-full transition z-10 duration-300 rounded-full h-[3px]"></span>
            </div>
            <div className="bg-white font-medium mobileNavDropdown flex items-center justify-center hidden w-[100vw] absolute top-0 right-0 h-[100vh]">
              <div className="flex flex-col gap-y-3 w-full px-10">
                {navigationList.map((nav, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        let mobileNavBtn =
                          document.getElementsByClassName("mobileNavBtn")[0];
                        mobileNavBtn.classList.toggle("mr-2");

                        mobileNavBtn.children[0].classList.toggle("bg-black");
                        mobileNavBtn.children[0].classList.toggle(
                          "bg-[#0ca6ff]"
                        );
                        mobileNavBtn.children[0].classList.toggle(
                          "rotate-[-45deg]"
                        );
                        mobileNavBtn.children[0].classList.toggle(
                          "translate-y-[6px]"
                        );
                        mobileNavBtn.children[1].classList.toggle(
                          "translate-x-[-45px]"
                        );
                        mobileNavBtn.children[1].classList.toggle(
                          "bg-transparent"
                        );

                        mobileNavBtn.children[2].classList.toggle("bg-black");
                        mobileNavBtn.children[2].classList.toggle(
                          "bg-[#0ca6ff]"
                        );
                        mobileNavBtn.children[2].classList.toggle(
                          "rotate-[45deg]"
                        );
                        mobileNavBtn.children[2].classList.toggle(
                          "translate-y-[-6px]"
                        );

                        let mobileNavDropdown =
                          document.getElementsByClassName(
                            "mobileNavDropdown"
                          )[0];
                        mobileNavDropdown.classList.toggle("hidden");

                        if (index == 0) {
                          homePage.current.scrollIntoView();
                        }
                        if (index == 1) {
                          projectsPage.current.scrollIntoView();
                        }
                        if (index == 2) {
                          aboutMePage.current.scrollIntoView();
                        }
                        if (index == 3) {
                          contactPage.current.scrollIntoView();
                        }
                      }}
                      className="w-full rounded-full h-[40px] hover:bg-[#0ca6ff] hover:text-white text-[#0ca6ff] ring-2 ring-[#0ca6ff] bg-white"
                    >
                      {nav}
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    let mobileNavBtn =
                      document.getElementsByClassName("mobileNavBtn")[0];

                    contactPage.current.scrollIntoView();

                    mobileNavBtn.classList.toggle("mr-2");

                    mobileNavBtn.children[0].classList.toggle("bg-black");
                    mobileNavBtn.children[0].classList.toggle("bg-[#0ca6ff]");
                    mobileNavBtn.children[0].classList.toggle(
                      "rotate-[-45deg]"
                    );
                    mobileNavBtn.children[0].classList.toggle(
                      "translate-y-[6px]"
                    );
                    mobileNavBtn.children[1].classList.toggle(
                      "translate-x-[-45px]"
                    );
                    mobileNavBtn.children[1].classList.toggle("bg-transparent");

                    mobileNavBtn.children[2].classList.toggle("bg-black");
                    mobileNavBtn.children[2].classList.toggle("bg-[#0ca6ff]");
                    mobileNavBtn.children[2].classList.toggle("rotate-[45deg]");
                    mobileNavBtn.children[2].classList.toggle(
                      "translate-y-[-6px]"
                    );
                    let mobileNavDropdown =
                      document.getElementsByClassName("mobileNavDropdown")[0];
                    mobileNavDropdown.classList.toggle("hidden");
                  }}
                  className="w-full mt-10 rounded-full h-[40px] hireMeBtn hover:bg-[#0ca6ff] hover:text-white text-[#0ca6ff] ring-2 ring-[#0ca6ff] bg-white"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => contactPage.current.scrollIntoView()}
            className="w-[110px] hidden sm:block h-[35px] text-[16px] sm:h-[40px] hireMeBtn rounded-full ring-1 transition duration-300 ring-[#0ca6ff] text-[#0ca6ff] hover:bg-[#0ca6ff] hover:text-white font-medium"
          >
            Hire Me
          </button>
        </nav>
      </header>
      <main className="bg-white ">
        <div
          ref={homePage}
          className="h-[100vh] flex px-3 sm:px-0 flex-col sm:flex-row justify-between items-center mx-auto container"
        >
          <div className="w-full sm:w-1/2 pt-[90px]  sm:pt-0">
            <h1 className="font-semibold text-[22px] sm:text-[27px] md:text-[36px]">
              Hello I am Muhammed Welcome to my portfolio I am looking for a job
              as a Frontend Developer
            </h1>
            <p className="font-medium text-[17px] sm:text-[17.5px] opacity-70 mt-4">
              I am Muhammed Ilan, I have been interested in website technologies
              for a long time, I am experienced not only in frontend but also
              backend, but my main field is frontend.
            </p>
          </div>
          <TechStack />
        </div>
        <div ref={projectsPage}>
          <Projects />
        </div>
        <div ref={aboutMePage}>
          <AboutMe />
        </div>
        <div className="z-10" ref={contactPage}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
