import React, { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import { faqs } from "../constants";
import { Transition } from "@headlessui/react";
import { faqIcon } from "../assets/svg";
import SectionLabel from "./SectionLabel";

const FaqSection = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(null);
  const toggleFaqOpen = (id) => {
    // setIsFaqOpen(!isFaqOpen);
    setIsFaqOpen(isFaqOpen === id ? null : id);
  };

  return (
    <Section
      claassName="pt-[12rem] -mt-[5.25] "
      // bg={`${heroBg} bg-cover bg-center`}
    >
      <div className="flex gap-2 px-24 py-28 max-md:flex-col max-md:gap-12 max-sm:px-8 max-sm:py-2">
        <div className="flex-1 flex flex-col items-start justify-start text-left max-md:gap-0">
          <SectionLabel text={"FAQ"} icon={faqIcon} />

          <h3 className="mt-6 text-5xl max-md:text-3xl flex flex-col leading-12 font-medium">
            <span>Got Questions?</span>
            <span>We've Got Answers!</span>
          </h3>
          <p>Find answers to commonly asked questions about Hoot.</p>
          <Button
            className="text-base font-sans lg:flex mt-[2rem] lg:mt-[2rem]"
            href="#"
            brown={"brown"}
          >
            Have Other Questions?
          </Button>
        </div>

        <div className="flex-1 text-left">
          {faqs.map((item) => (
            <div key={item.id} className="border-b border-[#86633A] py-8">
              <button
                className="flex w-full justify-between focus:outline-none "
                onClick={() => toggleFaqOpen(item.id)}
              >
                <h4 className="inline">{item.question}</h4>

                <svg
                  className={`w-6 h-6 inline transform transition-transform duration-300 ${
                    isFaqOpen === item.id ? "rotate-0" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isFaqOpen === item.id ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v12m6-6H6"
                    ></path>
                  )}
                </svg>
              </button>
              <Transition
                show={isFaqOpen === item.id}
                enter="transition-all duration-500 ease-in-out"
                enterFrom="opacity-0 max-h-0 overflow-hidden"
                enterTo="opacity-100 max-h-screen overflow-hidden"
                leave="transition-all duration-500 ease-in-out"
                leaveFrom="opacity-100 max-h-screen overflow-hidden"
                leaveTo="opacity-0 max-h-0 overflow-hidden"
                as="div"
              >
                <div className="mt-2">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
                {/* {isFaqOpen === item.id && <p>{item.answer}</p>} */}
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FaqSection;
