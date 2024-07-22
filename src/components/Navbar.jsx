import React, { useState, useCallback } from "react";
import { logo1, navbarItems } from "../constants";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS globally once
AOS.init({
  delay: 300,
});

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo1} alt="Logo" />
        </div>
        <div className="hidden lg:flex justify-center items-center">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
              className="px-4 font-custom cursor-pointer text-base tracking-wider font-semibold text-gray-900 hover:text-gray-800"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <button className="font-custom py-2 px-4 rounded-xl border hover:bg-neutral-950 hover:text-white transition-all text-xl">
            <a href="#contact">Contact</a>
          </button>
        </div>
        <motion.div
          variants={variants}
          className="flex justify-center items-center lg:hidden"
        >
          {showMenu ? (
            <X className="w-7 h-7" onClick={toggleMenu} />
          ) : (
            <Menu className="w-7 h-7" onClick={toggleMenu} />
          )}
        </motion.div>
      </div>
      {showMenu && (
        <div className="bg-gray-100 py-4 mx-4 rounded-2xl lg:hidden">
          <motion.div className="flex flex-col gap-4">
            {navbarItems.map((item, index) => (
              <a
                data-aos="fade-down"
                data-aos-delay={index * 200}
                key={index}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                onClick={toggleMenu}
                className="px-6 font-custom cursor-pointer font-semibold text-xl tracking-wider text-gray-900 hover:text-gray-800"
              >
                {item}
              </a>
            ))}
          </motion.div>
          <div
            data-aos="fade-left"
            data-aos-delay={1200}
            className="flex my-2 items-center justify-center lg:hidden"
          >
            <button
              onClick={toggleMenu}
              className="font-custom py-2 px-4 rounded-xl border text-xl hover:bg-neutral-950 hover:text-white transition-all"
            >
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
