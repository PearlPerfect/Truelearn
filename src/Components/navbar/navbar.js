import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {HiOutlineCurrencyBangladeshi} from 'react-icons/hi'
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "About", href: "/about" },
  { text: "courses", href: "/courses" },
  { text: "portal", href: "/portal" },
  { text: "Blogs", href: "/Blog" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        
        <Link href={"/"}>
          
            <p className="logo">  <HiOutlineCurrencyBangladeshi /> TrueLearn</p>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;