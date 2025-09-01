import React from "react";
import { counterItems } from "../assets/constants";
import { div } from "three/tsl";
import CountUp from "react-countup";
const AnimatedCounter = () => {
  return (
    <div id="counter"  className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
           
            className="bg-zinc-900 rounded-lg p-10 justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
