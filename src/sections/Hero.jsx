import React from "react";
// Import the required export from constants, e.g. named export 'words'
import { words } from "../assets/constants";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="src/assets/public/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px:20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>the future</h1>
              <h1>together</h1>
            </div>
            <p className="md:text-lg relative z-10 text-base text-gray-300 mt-5">
              Join us in building a brighter tomorrow.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="get-started-button"
              text="See my work"
            />
          </div>
        </header>
      </div>
        <AnimatedCounter />
    </section>
  );
};

export default Hero;
