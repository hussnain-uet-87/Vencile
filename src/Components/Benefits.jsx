import React from "react";
import { RiRainyFill,RiBardFill,RiHandHeartFill,RiLeafFill } from "react-icons/ri";

import featuresImg from "../assets/images/features-img.png";

const Benefits = () => {
  const featuresData = [
    {
      head: "Deep Hydration",
      para: "Locks in moisture to keep skin supple , smooth and comfortable throughtout the day",
      icon: RiRainyFill,
    },  
    {
      head: "Radiance Boost",
      para: "Enriched with natural antioxidants to revive dulness and enchance your skin's natural glow.",
      icon: RiBardFill ,
    },
    {
      head: "Skin Barrier Support",
      para: "Strengthens and protects against environmental stressors for healthier, more resilient skin.",
      icon: RiHandHeartFill ,
    },
    {
      head: "Powered by  Natural Ingredients",
      para: "Formulated with botanically formulated oils and plant extracts to nourish, protect and restore - free from synthetic fibres or harsh chemicals.",
      icon: RiLeafFill ,
    },
  ];
  return (
    <section className="w-full bg-[#e8f2e9] py-6 px-12">
      <div className="flex items-center mt-10 justify-center gap-[14px]">
        <span className="w-[40px] bg-neutral-500 h-[3px] rounded-2xl"></span>
        <p className="text-xl text-[#45553d]">Benefits</p>
        <span className="w-[40px] bg-neutral-500 h-[3px] rounded-2xl"></span>
      </div>
      <h2 className="text-center text-5xl mt-4 text-[#45553d]">
        Here at Vencile Healthier Skins Means a Healthier You
      </h2>
      <div className="flex items-center justify-center gap-10 mt-12">
        <div className="max-h-[500px] overflow-hidden rounded-2xl">
          <img
            src={featuresImg}
            alt="features-img"
            className="h-full w-full object-contain object-center "
          />
        </div>

        <div className=" text-[#45553d] ">
          {featuresData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="w-[600px] flex items-center gap-6  border-b-2 border-b-neutral-400">
                <div className="w-100px text-6xl">
                  <Icon />
                </div>
                <div className="py-6">
                  <h2 className="font-bold">{item.head}</h2>
                  <p>{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
