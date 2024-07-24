import React, { useState, useEffect } from "react";
import AllProjects from "./AllProjects";
import WebProjects from "./WebProjects";
import GraphicDesign from "./GraphicDesign";
import Smm from "./Smm";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      delay: 300,
    });
  }, []);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <section id="portfolio" className="mb-10 lg:mb-20">
      <h1 data-aos="fade-up" className="text-5xl my-10 font-bold text-center">
        Portfolio
      </h1>

      <div className="tabs">
        <ul className="flex justify-center flex-wrap items-center font-semibold">
          <li
            data-aos="fade-up"
            className={`py-2 px-4 cursor-pointer hover:text-blue-600  hover:border-b hover:transition-all hover:duration-200 ${
              activeTabIndex === 0
                ? "text-blue-600 border-b-2 border-blue-600 transition-all duration-400"
                : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            All
          </li>
          <li
            data-aos="fade-up"
            className={`py-2 px-4 cursor-pointer hover:text-blue-600  hover:border-b hover:transition-all hover:duration-200 ${
              activeTabIndex === 1
                ? "text-blue-600 border-b-2 border-blue-600 transition-all duration-400"
                : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Web
          </li>
          <li
            data-aos="fade-up"
            className={`py-2 px-4 cursor-pointer  hover:border-b hover:transition-all hover:duration-200 ${
              activeTabIndex === 2
                ? "text-blue-600 border-b-2 border-blue-600 transition-all duration-400"
                : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Graphic Design
          </li>
          <li
            data-aos="fade-up"
            className={`py-2 px-4 cursor-pointer hover:text-blue-600 hover:border-b hover:transition-all hover:duration-300 ${
              activeTabIndex === 3
                ? "text-blue-600 border-b-2 border-blue-600 transition-all duration-400"
                : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            SMM
          </li>
        </ul>

        <div className="content py-4">
          {activeTabIndex === 0 && <AllProjects />}
          {activeTabIndex === 1 && <WebProjects />}
          {activeTabIndex === 2 && <GraphicDesign />}
          {activeTabIndex === 3 && <Smm />}
        </div>
      </div>
    </section>
  );
};

export default Projects;
