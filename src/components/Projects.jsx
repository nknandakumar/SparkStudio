import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AllProjects from "./AllProjects";
import WebProjects from "./WebProjects";
import GraphicDesign from "./GraphicDesign";
import Smm from "./Smm";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  delay: 300,
});

const Projects = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeTab = tabRefs.current[activeTabIndex];
    if (activeTab) {
      setUnderlineProps({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [activeTabIndex]);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const tabItems = ["All", "Web", "Graphic Design", "SMM"];
  const tabComponents = [AllProjects, WebProjects, GraphicDesign, Smm];

  return (
    <section id="portfolio" className="mb-10 lg:mb-20">
      <h1 data-aos="fade-up" className="text-5xl my-10 font-bold text-center">
        Portfolio
      </h1>

      <div className="tabs relative">
        <ul className="flex justify-center items-center font-semibold relative">
          {tabItems.map((tab, index) => (
            <li
              key={index}
              data-aos="fade-up"
              className={`py-2 px-4 cursor-pointer hover:text-blue-600 ${
                activeTabIndex === index ? "text-blue-600" : ""
              }`}
              onClick={() => handleTabClick(index)}
              ref={(el) => (tabRefs.current[index] = el)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 bg-blue-600 h-1"
          style={{ left: underlineProps.left, width: underlineProps.width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <div className="content py-4">
        {tabComponents.map(
          (Component, index) =>
            activeTabIndex === index && <Component key={index} />
        )}
      </div>
    </section>
  );
};

export default Projects;
