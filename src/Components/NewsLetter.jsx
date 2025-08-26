import React from 'react'
import newspaperImg from "../assets/images/newspaper-img.png"

const NewsLetter = () => {
  return (
    <section id='newsletter' className="w-full py-12 px-6 md:px-20 bg-[#f7f9f6] flex flex-col md:flex-row items-center justify-between gap-10 border-b-2 border-b-[#7b8e71]">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-[#45553d]">
          Subscribe to our Newsletter
        </h2>
        <p className="text-base md:text-lg text-[#45553d] mt-4">
          Subscribe to our Newsletter and become part of a Community that believes 
          in Radiant Skin and a Radiant Planet.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row mt-6 gap-3 sm:gap-2 w-full max-w-lg mx-auto md:mx-0">
          <input
            className="flex-1 bg-white py-3 rounded outline-none border border-gray-400 px-4 shadow-sm text-sm md:text-base"
            type="email"
            placeholder="Enter your email here"
          />
          <button className="bg-[#45553d] text-[#e8f2e9] py-3 px-6 rounded hover:bg-[#374431] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 -order-1 flex justify-center">
        <img
          src={newspaperImg}
          alt="Newsletter illustration"
          className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full h-auto"
        />
      </div>
    </section>
  )
}

export default NewsLetter
