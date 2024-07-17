import { useState } from "react";
import { logo1 } from "../constants/index.js";
import { navbarItems } from "../constants/index";
import { Menu, X } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  
  return (
    <>
      <nav className="flex justify-between items-center  lg:mb-20  ">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img src={logo1} alt="Logo" />
        </div>
        {/* Nav bar Items */}
        <div className=" hidden  lg:flex justify-center items-center">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              className="px-4 font-custom cursor-pointer  text-base tracking-wider font-semibold text-gray-900 hover:text-gray-800"
            >
              {item}
            </a>
          ))}
        </div>
        <div className=" hidden  lg:flex items-center justify-center  ">
          <button className=" font-custom py-2 px-4 rounded-xl border  hover:bg-neutral-950 hover:text-white transition-all  text-xl ">
            Contact
          </button>
        </div>
        <div className=" flex justify-center items-center lg:hidden">
          {showMenu ? (
            <X className=" w-7 h-20" onClick={toggleMenu} />
          ) : (
            <Menu className=" w-7 h-20" onClick={toggleMenu} />
          )}
        </div>
      </nav>
      {/* Menu for smaller screens */}

      {showMenu && (
        <div  id="small" className=" bg-gray py-4 mx-10 rounded-2xl lg:hidden ">
          {/* Nav bar Items for smaller screens */}
          <div className="  flex flex-col gap-4 ">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                className="px-6 font-custom cursor-pointer font-semibold  text-xl tracking-wider text-gray-900 hover:text-gray-800"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="   lg:hidden flex my-2 items-center justify-center  ">
            <button className=" font-custom py-2 px-4 rounded-xl border text-xl  hover:bg-neutral-950 hover:text-white transition-all  ">
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
