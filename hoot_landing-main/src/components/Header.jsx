import React from "react";
import { Link, useLocation } from "react-router-dom";

import { hootLogo } from "../assets/icons";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./HeaderDesign";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { NavLink } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();
  const [isActive, setisActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNav) return;

    enablePageScroll();
    setOpenNav(false);
  };

  return (
    <div
      className={`fixed top-0 pt-4 max-sm:pt-2 flex left-0 w-full z-50  lg:bg-color-3/90 lg:backdrop-blur-sm ${
        openNav ? "bg-[#F8F3EE]/90" : "bg-[#F8F3EE]/25 backdrop-blur-sm"
      }`}
    >
      <div className="flex w-full items-center justify-between  px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <NavLink className="block w-[12rem] xl:mr-8" to="/">
          <img src={hootLogo} width={60} height={20} alt="" />
        </NavLink>

        <nav
          className={` ${
            openNav ? "flex bg-color-3 items-start" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#F8F3EE] lg:static lg:flex items-center lg:bg-transparent`}
        >
          <div
            className={`${
              openNav ? "border-0 divide-none text-start items-start" : ""
            } text-[#86633A] relative z-2 flex flex-col lg:flex-row divide-x divide-x-2/40 divide-stone-300`}
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={() => {
                  if (item.url.startsWith("/#")) {
                    const element = document.querySelector(
                      item.url.replace("/", "")
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  handleClick();
                }}
                className={`block relative font-sans text-base normal-case text-n-1 transition-colors hover:text-color-1 
                  ${isActive ? "active-link" : ""}
                  ${openNav ? "text-xl" : ""} ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-5 md:py-5 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-8`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Button
            className="text-base font-sans hidden lg:flex"
            href="#"
            purple={""}
          >
            Get Early Access
          </Button>
        </nav>

        {/* <HamburgerMenu /> */}
        <div className="absolute inset-0 pointer-events-none lg:hidden">
          <div className="absolute inset-0 opacity-[.03]"></div>
        </div>

        <Button
          className="right-0 ml-auto lg:hidden"
          px="px-3"
          square={"square"}
          onClick={toggleNav}
        >
          <MenuSvg openNav={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
