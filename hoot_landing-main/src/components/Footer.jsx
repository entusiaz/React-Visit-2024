import React from "react";
import { hootLogoSvg } from "../assets/icons";
import Section from "./Section";

const Footer = () => {
  return (
    <Section
      claassName="pt-[12rem] -mt-[5.25]  "
      // bg={`${heroBg} bg-cover bg-center`}
    >
      <div className="flex max-lg:hidden w-full justify-between mx-auto px-12 border-t border-[#86633A]/25 pt-6 pb-4">
        <div className="flex divide-x divide-[#86633A]/25 text-base  text-[#4F4B46]">
          <span className="pr-2">Privacy Policy</span>
          <span className="pl-2">Terms of Use</span>
        </div>
        <div>
          <img src={hootLogoSvg} width={60} alt="" />
        </div>
        <div className="text-[#4F4B46]">© 2024 Hoot. All rights reserved.</div>
      </div>

      <div className=" hidden max-lg:flex flex-col items-center w-full gap-4 mx-auto px-12 border-t border-[#86633A]/25 pt-6">
        <div>
          {" "}
          <a href="#">
            <img src={hootLogoSvg} width={60} alt="" />
          </a>
        </div>
        <div className="flex divide-x divide-[#86633A]/25 text-base  text-[#4F4B46]">
          <span className="pr-2">
            {" "}
            <a href="">Privacy Policy</a>
          </span>
          <span className="pl-2">
            {" "}
            <a href="">Terms of Use</a>
          </span>
        </div>

        <div className="text-[#4F4B46]">© 2024 Hoot. All rights reserved.</div>
      </div>
    </Section>
  );
};

export default Footer;
