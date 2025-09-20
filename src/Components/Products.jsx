import React from 'react'
import { RiPaintLine, RiContrastDrop2Line, RiCoinLine, RiSunLine, RiInkBottleLine } from 'react-icons/ri'

const Products = () => {
  const productData = [
    { name: "Cream", icon: RiPaintLine },
    { name: "Serum", icon: RiContrastDrop2Line },
    { name: "Lotion", icon: RiCoinLine },
    { name: "Sunscreen", icon: RiSunLine },
    { name: "Oil", icon: RiInkBottleLine },
  ];

  return (
    <section id='products' className="w-full px-6 md:px-10 py-12 bg-[#607357]">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl text-center mb-10 text-[#e8f2e9] font-bold">
        Check Out Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-0 text-[#e8f2e9] justify-items-center md:px-30">
        {productData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full bg-[#e8f2e9] flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
                <Icon className="text-3xl md:text-5xl text-[#45553d]" />
              </div>
              <p className="text-center font-semibold mt-2 text-md md:text-xl hover:cursor-pointer">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-10">
        <a href='products' className="px-6 md:px-8 font-semibold py-2 text-[#45553d] bg-[#e8f2e9] hover:bg-[#cbd6c6] transition-colors text-base md:text-lg rounded-md">
          View Collection
        </a>
      </div>
    </section>
  );
};

export default Products;
