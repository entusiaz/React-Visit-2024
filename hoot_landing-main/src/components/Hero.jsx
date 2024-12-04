import React from "react";
import Section from "./Section";
import Button from "./Button";
import { earlyAccess_1 } from "../assets/images";
import { earlyAccessMembers } from "../constants";
import OverlappingImages from "./OverlappingImages";
import { heroBg } from "../assets/images";
import SectionLabel from "./SectionLabel";
import { heroIcon } from "../assets/svg";

const Hero = () => {
  return (
    <Section
      claassName="pt-[12rem] -mt-[5.25] "
      id="hero"
      bg={heroBg}
      // bg={`${heroBg} bg-cover bg-center`}
    >
      <div className="container relative mx-auto">
        <div className="flex flex-col justify-center items-center md:w-[70%] sm:w-[90%] mx-auto relative z-1 max-w-[62rem]text-center mb-[4rem] md:mb-20 lg:mb-[6rem] leading-7 ">
          <SectionLabel text={"Voice your Interests"} icon={heroIcon} />
          <h1 className=" mb-6 font-medium font text-7xl text-center max-sm:text-4xl max-md:text-5xl">
            Discover Conversations that Matter
          </h1>
          <span className="text-lg font-normal text-[#86633A]">
            <p>
              Join Hoot and connect with people who share your passions. Sign up
              for the waitlist to be the first to experience our unique audio
              chat platform.
            </p>
          </span>

          <div className="max-lg:mt-4 mt-0">
            <Button
              className="text-base font-sans lg:flex mt-[2rem] lg:mt-[2rem]"
              href="#"
              brown={"brown"}
            >
              Get Early Access
            </Button>
          </div>

          <div className="flex justify-center relative w-full mx-auto gap-4 lg:flex mt-[1.2rem] lg:mt-[1.2rem]">
            <div className="flex">
              <p className="flex flex-col items-end max-sm:text-xs">
                <span>Join Over 5000+</span>
                <span>Early Access</span>
              </p>
            </div>
            <div className="flex ">
              <div className={`flex relative w-full top-0 left-0`}>
                <OverlappingImages />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
