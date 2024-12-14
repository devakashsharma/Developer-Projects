import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import "./style.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between-element navbar">
      <img src={logo} alt="hoobank" className="w-24 h-auto" />

      <ul className="list-none justify-items-end responsive w-full">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1
                ? "custom-margin-right-0"
                : "custom-margin-right"
            } text-white custom-margin-right`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="navIcon xs:hidden flex flex-1 justify-items-end w-full">
        <img
          src={toggle ? close : menu}
          alt="menuicon"
          className="navIcon w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-items-end responsive w-full">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1
                    ? 'mr-0'
                    : 'mb-4'
                } text-white custom-margin-right`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
