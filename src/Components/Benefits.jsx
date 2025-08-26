import React from "react";
import {
  RiRainyFill,
  RiBardFill,
  RiHandHeartFill,
  RiLeafFill,
} from "react-icons/ri";

import featuresImg from "../assets/images/features-img.png";

const Benefits = () => {
  const featuresData = [
    {
      head: "Deep Hydration",
      para: "Locks in moisture to keep skin supple, smooth and comfortable throughout the day.",
      icon: RiRainyFill,
    },
    {
      head: "Radiance Boost",
      para: "Enriched with natural antioxidants to revive dullness and enhance your skin's natural glow.",
      icon: RiBardFill,
    },
    {
      head: "Skin Barrier Support",
      para: "Strengthens and protects against environmental stressors for healthier, more resilient skin.",
      icon: RiHandHeartFill,
    },
    {
      head: "Powered by Natural Ingredients",
      para: "Formulated with botanical oils and plant extracts to nourish, protect, and restore — free from synthetic fibers or harsh chemicals.",
      icon: RiLeafFill,
    },
  ];

  return (
    <section id="benefits" className="scroll-mt-20 w-full bg-[#e8f2e9] py-12 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-3">
        <span className="w-[40px] h-[3px] rounded-2xl bg-neutral-500"></span>
        <p className="text-lg md:text-xl text-[#45553d] font-medium">
          Benefits
        </p>
        <span className="w-[40px] h-[3px] rounded-2xl bg-neutral-500"></span>
      </div>

      <h2 className="text-center text-2xl md:text-4xl lg:text-4xl font-bold mt-4 text-[#45553d] leading-snug">
        Here at Vencile, Healthier Skin Means a Healthier You
      </h2>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-12">
        {/* Image */}
        <div className="max-h-[500px] flex justify-center">
          <img
            src={featuresImg}
            alt="features"
            className="h-full w-full max-w-sm object-contain object-center rounded-2xl shadow-lg"
          />
        </div>

        {/* Feature List */}
        <div className="space-y-6">
          {featuresData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-6 pb-6 border-b border-neutral-400 last:border-none"
              >
                {/* Icon */}
                <div className="flex-shrink-0 text-2xl md:text-4xl text-[#e8f2e9] bg-[#45553d] p-3 rounded-2xl drop-shadow-md">
                  <Icon />
                </div>

                {/* Text */}
                <div className="text-[#45553d]">
                  <h3 className="font-bold text-lg md:text-xl">{item.head}</h3>
                  <p className="text-sm md:text-base mt-1">{item.para}</p>
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
