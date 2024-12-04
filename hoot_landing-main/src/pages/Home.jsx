import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WaitlistForm from "../components/WaitlistForm";
import FeatureSection from "../components/FeatureSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash && hash !== "#") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <section className="">
        <Hero />
      </section>

      <section id="features" className="z-0 left-0  bg-[#F8F3EE]">
        <FeatureSection />
      </section>

      <section className="">
        <WaitlistForm />
      </section>

      <section className="">
        <FaqSection />
      </section>

      <section className="">
        <Footer />
      </section>
    </>
  );
};

export default Home;
