import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
     <footer className="bg-[#45553d] text-[#e8f2e9] py-4 px-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left side */}
        <span className="font-bold tracking-wide">VENCILE</span>

        {/* Right side social icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <RiFacebookFill />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <RiInstagramFill />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <RiTwitterXFill />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer