import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Rating", "Benefits", "Products","Newsletter","Contact",];

  return (
    <nav className="w-full font-[Poppins] flex items-center justify-between px-12 py-4 bg-[#e8f2e9]">
      {/* Left: Brand */}
      <div className="text-[#32382c] font-bold text-2xl tracking-wide">
        Vencile
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-8">
        {navItems.map((item,index) => (
          <a
            key={index}
            className="text-[#32382c] hover:underline hover:cursor-pointer transition duration-200"
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <a className="bg-[#32382c] text-[#e8f2e9] px-8 py-2 rounded-lg hover:opacity-90 transition duration-200">
          Order Now
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#32382c" /> : <Menu size={28} color="#32382c" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#e8f2e9] flex flex-col items-center gap-6 py-6 shadow-md z-50">
          {navItems.map((item,index) => (
            <button
              key={index}
              className="text-[#32382c] text-lg hover:opacity-70 transition duration-200"
            >
              {item}
            </button>
          ))}
          <button className="bg-[#32382c] text-[#e8f2e9] px-6 py-2 rounded-lg hover:opacity-90 transition duration-200">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
