import React from "react";
import { counterItems } from "../assets/constants";
import { div } from "three/tsl";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      AnimatedCounter
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item ) => (
          <div
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center"
            key={item.label}
          >
            <div
              key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              0
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
