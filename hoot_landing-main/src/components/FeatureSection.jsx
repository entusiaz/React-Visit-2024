import React from "react";
import Section from "./Section";
import Button from "./Button";
import {
  earlyAccess_1,
  featureImage1,
  featureImage2,
  featureImage3,
} from "../assets/images";
import { earlyAccessMembers } from "../constants";
import OverlappingImages from "./OverlappingImages";
import { featuresIcon } from "../assets/svg";
import SectionLabel from "./SectionLabel";

const Hero = () => {
  return (
    <Section
      claassName="pt-[12rem] -mt-[5.25] "
      id="hero"
      bg=" bg-[#fbfbfb] bg-cover bg-center"
    >
      <div className="container relative mx-auto">
        <div className="flex flex-col justify-center items-center md:w-[80%] sm:w-[90%] mx-auto relative z-1 max-w-[62rem]text-center mb-[4rem] md:mb-20 lg:mb-[6rem] leading-7 ">
          <SectionLabel text={"FEATURES"} icon={featuresIcon} />

          <h1 className=" mb-6 font-medium font text-5xl text-center max-sm:text-4xl max-md:text-5xl">
            Explore Hoot's powerful Features
          </h1>
          <span className="w-[70%] text-lg font-normal text-[#86633A] pb-4">
            <p>
              Hoot is an innovative audio chat platform designed to connect you
              with like-minded individuals based on shared interests. Whether
              you love music, sports, or technology, Hoot makes it easy to find
              engaging conversations.
            </p>
          </span>

          <div className="flex flex-col gap-4 pt-12 ">
            <div className="flex gap-4 max-sm:flex-col">
              <div className="flex flex-col relative h-[30.1rem] max-sm:h-[30.1rem] max-lg:h-[30.1rem] bg-[#F4EEE6] rounded-[24px] border border-amber-600/10 p-8 items-start justify-start text-left">
                <h3 className="text-[#231E18] text-2xl mb-4 bg-[#]">
                  AI-Based matchmaking
                </h3>
                <p className="text-[#4F4B46] ">
                  Get matched with users based on your preferences, call
                  history, and behavior patterns. Our AI ensures you find the
                  most compatible conversation partners.
                </p>
                <div className="absolute bottom-0 left-0 top-[18rem] bg-[#FDFBFA] w-full h-[12rem] rounded-b-[24px] px-[-20px] z-30 max-sm:h-[12rem]">
                  <img
                    className="w-50 h-40 mx-auto"
                    src={featureImage1}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex flex-col relative h-[30rem] max-sm:h-[30.1rem] max-lg:h-[30.1rem] bg-[#F4EEE6] rounded-[24px] border border-amber-600/10 p-8 items-start justify-start text-left">
                <h3 className="text-[#231E18] text-2xl mb-4 bg-[#]">
                  Real-Time Reactions
                </h3>
                <p className="text-[#4F4B46] ">
                  Use real-time emojis and sounds to make your chats more
                  interactive and expressive, adding a fun and dynamic layer to
                  your conversations.
                </p>
                <div className="absolute bottom-0 left-0 top-[18rem] bg-[#FDFBFA] w-full h-[12rem] rounded-b-[24px] px-[-20px] z-30 max-sm:h-[12rem]">
                  <img
                    className="w-50 h-40 mx-auto"
                    src={featureImage2}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="relative flex gap-4 bg-[#F4EEE6] p-8 rounded-[24px]">
              <div className="flex flex-col items-start justify-start text-left w-[60%] max-sm:w-[100%] max-lg:w-[100%]">
                <h3 className="text-2xl mb-4">Virtual Gifting</h3>
                <p className="max-sm:text-xs">
                  Send virtual gifts or stickers during your calls to make
                  interactions more fun and personalized. Show appreciation and
                  build connections through thoughtful, virtual gestures.
                </p>
                <Button
                  className="text-base font-sans lg:flex mt-[2rem] lg:mt-[2rem]"
                  href="#"
                  brown={"brown"}
                >
                  Get Early Access
                </Button>
              </div>
              <div className=" flex bg-[]">
                <div className="absolute bg-red-400  bottom-0 right-0 rounded-tl-[24px] rounded-br-[24px] w-[20rem] h-[8rem] max-lg:hidden max-sm:hidden">
                  <img
                    className="absolute bottom-[0] right-[-10] w-[60rem] h-[14rem] rounded-tl-[24px] rounded-br-[24px]"
                    src={featureImage3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
