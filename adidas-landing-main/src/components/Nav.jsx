import { useState } from "react";
import { hamburger, hamburgerClose, headerLogo } from "../assets/icons"

import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  }

  return (
    <header className="min-lg:padding-x w-dvw">
        <nav className="flex justify-evenly items-center py-4 z-50">
          <div>
            <ul className=" flex flex-1 justify-center items-center text-md font-bold gap-16 max-lg:hidden text-white">
              <li className="leading-normal text-slate-200 "><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">MEN</a></li>
              <li className="leading-normal text-slate-200"><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">WOMEN</a></li>
              <li className="leading-normal text-slate-200"><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">KIDS</a></li>
              <li>
                <a href="/">
                  <img src={ headerLogo } alt="Logo"
                  width={70}
                  height={29} 
                  />
                </a>
              </li>
              <li className="leading-normal text-slate-200"><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">NEW IN</a></li>
              <li className="leading-normal text-slate-200"><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">LIMITED</a></li>
              <li className="leading-normal text-slate-200"><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">SALE</a></li>
            </ul>
          </div>
          <div className="hidden max-lg:block w-screen">
            <div className="flex flex-1 justify-between items-center gap-16 pt-2 px-4">
              <div>
                <a href="/">
                  <img src={ headerLogo } alt="Logo" width={49} height={40} />
                </a>
              </div>
              <div className="hamburger group p-0 transition ease transform duration-300" onClick={toggleNavbar}>
                  {
                    isOpen ? <img className="rounded-full h-11 w-11 p-1 border-2 border-white group-hover:rotate-90 transition ease transform duration-300" src={hamburgerClose} alt="hamburger" width={32} height={32} 
                    /> : 
                    <img className="rounded-lg h-11 w-11 p-2 border-2 border-white  transition ease transform duration-300" src={hamburger} alt="hamburger-close" width={32} height={32} 
                  />
                  }
              </div>
            </div>
            {/* hover:underline hover:duration-300 cursor-pointer */}
            {/* <div className={`h-dvh w-screen bg-black absolute z-10 px-4 ${!isOpen ? 'animate-fadeOutAnimation': ''}`} style={{display: isOpen ? 'block': 'none' }}> */}
            <div className="h-screen w-screen bg-black absolute z-50 px-4" style={{display: isOpen ? 'block': 'none' }}>
              <ul className=" flex flex-col gap-16 text-white pt-4 animate-fadeInAnimation" >
                <li className="leading-normal font-bold text-3xl text-slate-200 cursor-pointer"><a href="#"  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">MEN</a></li>
                <li className="leading-normal font-bold text-3xl text-slate-200 cursor-pointer"><a href="#"  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">WOMEN</a></li>
                <li className="leading-normal font-bold text-3xl text-slate-200 cursor-pointer"><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">KIDS</a></li>
                <li className="leading-normal font-bold text-3xl text-slate-200 cursor-pointer"><a href="#" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">NEW IN</a></li>
                <li className="leading-normal font-bold text-3xl text-slate-200 cursor-pointer"><a href="#"  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">LIMITED</a></li>
                <li className="leading-normal font-bold text-3xl text-slate-200 cursor-pointer"><a href="#"  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">SALE</a></li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Nav
