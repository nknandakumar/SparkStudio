import { useState, useEffect } from "react";
import { logo1 } from "../constants/index.js";
import { navbarItems } from "../constants/index";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);




  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white  " // fixed top-0 left-0 w-full z-50 for fixed
    >
      <div className="flex justify-between items-center px-4 ">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img src={logo1} alt="Logo" />
        </div>
        {/* Nav bar Items */}
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
            <a href="#contact"> Contact</a>
          </button>
        </div>
        <div className="flex justify-center items-center lg:hidden">
          {showMenu ? (
            <X className="w-7 h-7" onClick={toggleMenu} />
          ) : (
            <Menu className="w-7 h-7" onClick={toggleMenu} />
          )}
        </div>
      </div>
      {/* Menu for smaller screens */}
      {showMenu && (
        <div className="bg-gray-100 py-4 mx-4 rounded-2xl lg:hidden bg-zinc-100 ">
          {/* Nav bar Items for smaller screens */}
          <div className="flex flex-col gap-4">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                onClick={toggleMenu}
                className="px-6 font-custom cursor-pointer font-semibold text-xl tracking-wider text-gray-900 hover:text-gray-800"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex my-2 items-center justify-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="font-custom py-2 px-4 rounded-xl border text-xl hover:bg-neutral-950 hover:text-white transition-all"
            >
              <a href="#contact"> Contact</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
