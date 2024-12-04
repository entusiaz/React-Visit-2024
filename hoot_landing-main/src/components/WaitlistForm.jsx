import React, { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import SectionLabel from "./SectionLabel";
import { featuresIcon } from "../assets/svg";

const WaitlistForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    console.log(values);
  };
  return (
    <Section
      claassName="pt-[12rem] -mt-[5.25] "
      id="hero"
      bg=" bg-cover bg-center"
    >
      <div className="container relative mx-auto">
        <div className="flex flex-col justify-center items-center md:w-[100%] sm:w-[100%] mx-auto relative z-1 max-w-[62rem]text-center mb-[4rem] md:mb-20 lg:mb-[6rem] leading-7 bg-[#231E18] rounded-[20px] py-16 px-4">
          <SectionLabel text={"Join Waitlist"} icon={featuresIcon} />

          <h1 className=" mb-6 font-medium font text-5xl text-center max-sm:text-2xl max-md:text-5xl text-[#E8D9C9]">
            Be the First to Experience Hoot
          </h1>
          <span className="w-[70%] font-normal text-base text-[#E8D9C9] max-sm:text-xs pb-4">
            <p>Sign Up for Early Access and Join the Waitlist Today!</p>
          </span>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[40%] max-sm:w-[100%] max-lg:w-[80%] py-8 px-6 bg-[]"
          >
            <input
              type="text"
              id="textField"
              placeholder="Full name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              className="text-base leading-normal placeholder-[#F4F4F4] text-[#F4F4F4] bg-[#9A9895] border  border-[#bababa] rounded-2xl py-3 px-5 max-sm:py-2 "
            />
            <input
              type="email"
              id="textField"
              placeholder="Email address"
              name="emailAddress"
              value={values.emailAddress}
              onChange={handleChange}
              className=" text-base leading-normal placeholder-[#9A9895] text-[#9A9895] bg-[#231E18] border border-[#4F4B46] rounded-2xl  py-3 px-5 max-sm:py-2 "
            />
            {/* <input
              type="text"
              id="textField"
              placeholder="Get full access"
              value={value}
              onChange={handleChange}
              className="text-base leading-normal placeholder-[#F4F4F4] text-[#F4F4F4] bg-[#86633A] rounded-2xl  py-3 px-5 max-sm:py-2 "
            /> */}
            <Button
              type="submit"
              className="w-[100%] px-0 text-base font-sans lg:flex mt-[2rem] lg:mt-[2rem]"
              brown={"brown"}
            >
              Get Early Access
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default WaitlistForm;
