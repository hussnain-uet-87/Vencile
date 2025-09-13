import React, { useState } from "react";

export default function ProductsPage() {
  const [filter, setFilter] = useState("latest");
  const [category, setCategory] = useState("all");

const products = [
  // Creams
  {
    id: 1,
    name: "Moisturizing Cream",
    desc: "Hydrates your skin with long-lasting moisture...",
    price: 45,
    category: "cream",
    image: "https://via.placeholder.com/300x300.png?text=Cream+1",
  },
  {
    id: 2,
    name: "Night Repair Cream",
    desc: "Repairs skin overnight with natural extracts...",
    price: 50,
    category: "cream",
    image: "https://via.placeholder.com/300x300.png?text=Cream+2",
  },
  {
    id: 3,
    name: "Bright Glow Cream",
    desc: "Brightens dull skin and restores natural glow...",
    price: 55,
    category: "cream",
    image: "https://via.placeholder.com/300x300.png?text=Cream+3",
  },
  {
    id: 4,
    name: "Anti-Age Cream",
    desc: "Reduces fine lines and smoothens skin...",
    price: 65,
    category: "cream",
    image: "https://via.placeholder.com/300x300.png?text=Cream+4",
  },
  {
    id: 5,
    name: "Vitamin C Cream",
    desc: "Packed with Vitamin C for radiant skin...",
    price: 70,
    category: "cream",
    image: "https://via.placeholder.com/300x300.png?text=Cream+5",
  },

  // Lotions
  {
    id: 6,
    name: "Hydrating Body Lotion",
    desc: "Softens skin with a smooth silky finish...",
    price: 40,
    category: "lotion",
    image: "https://via.placeholder.com/300x300.png?text=Lotion+1",
  },
  {
    id: 7,
    name: "Luxury Lotion",
    desc: "Rich formula that deeply nourishes skin...",
    price: 55,
    category: "lotion",
    image: "https://via.placeholder.com/300x300.png?text=Lotion+2",
  },
  {
    id: 8,
    name: "Soothing Aloe Lotion",
    desc: "Soothes irritated skin with aloe vera extract...",
    price: 35,
    category: "lotion",
    image: "https://via.placeholder.com/300x300.png?text=Lotion+3",
  },
  {
    id: 9,
    name: "Coconut Lotion",
    desc: "Infused with coconut oil for deep hydration...",
    price: 50,
    category: "lotion",
    image: "https://via.placeholder.com/300x300.png?text=Lotion+4",
  },
  {
    id: 10,
    name: "Shea Butter Lotion",
    desc: "Enriched with shea butter for ultra-soft skin...",
    price: 60,
    category: "lotion",
    image: "https://via.placeholder.com/300x300.png?text=Lotion+5",
  },

  // Serums
  {
    id: 11,
    name: "Anti-Age Serum",
    desc: "Smoothens fine lines and rejuvenates skin...",
    price: 75,
    category: "serum",
    image: "https://via.placeholder.com/300x300.png?text=Serum+1",
  },
  {
    id: 12,
    name: "Brightening Serum",
    desc: "Restores glow and brightens your complexion...",
    price: 85,
    category: "serum",
    image: "https://via.placeholder.com/300x300.png?text=Serum+2",
  },
  {
    id: 13,
    name: "Collagen Serum",
    desc: "Boosts collagen production for firmer skin...",
    price: 95,
    category: "serum",
    image: "https://via.placeholder.com/300x300.png?text=Serum+3",
  },
  {
    id: 14,
    name: "Hyaluronic Serum",
    desc: "Deeply hydrates and plumps skin...",
    price: 90,
    category: "serum",
    image: "https://via.placeholder.com/300x300.png?text=Serum+4",
  },
  {
    id: 15,
    name: "Vitamin E Serum",
    desc: "Repairs and protects skin with Vitamin E...",
    price: 100,
    category: "serum",
    image: "https://via.placeholder.com/300x300.png?text=Serum+5",
  },

  // Sunscreens
  {
    id: 16,
    name: "Sun Protection Lotion",
    desc: "Protects skin from harmful UV rays...",
    price: 35,
    category: "sunscreen",
    image: "https://via.placeholder.com/300x300.png?text=Sunscreen+1",
  },
  {
    id: 17,
    name: "Aloe Vera Sunscreen",
    desc: "Calms skin while shielding from sun damage...",
    price: 55,
    category: "sunscreen",
    image: "https://via.placeholder.com/300x300.png?text=Sunscreen+2",
  },
  {
    id: 18,
    name: "Mineral Sunscreen",
    desc: "Natural mineral formula for sensitive skin...",
    price: 60,
    category: "sunscreen",
    image: "https://via.placeholder.com/300x300.png?text=Sunscreen+3",
  },
  {
    id: 19,
    name: "Ultra-Light Sunscreen",
    desc: "Lightweight, non-greasy sun protection...",
    price: 45,
    category: "sunscreen",
    image: "https://via.placeholder.com/300x300.png?text=Sunscreen+4",
  },
  {
    id: 20,
    name: "Waterproof Sunscreen",
    desc: "Stays effective even while swimming...",
    price: 65,
    category: "sunscreen",
    image: "https://via.placeholder.com/300x300.png?text=Sunscreen+5",
  },

  // Oils
  {
    id: 21,
    name: "Herbal Oil",
    desc: "A natural oil blend to nourish hair and skin...",
    price: 60,
    category: "oil",
    image: "https://via.placeholder.com/300x300.png?text=Oil+1",
  },
  {
    id: 22,
    name: "Argan Oil",
    desc: "Moisturizes and strengthens hair...",
    price: 80,
    category: "oil",
    image: "https://via.placeholder.com/300x300.png?text=Oil+2",
  },
  {
    id: 23,
    name: "Coconut Oil",
    desc: "Organic coconut oil for multipurpose care...",
    price: 40,
    category: "oil",
    image: "https://via.placeholder.com/300x300.png?text=Oil+3",
  },
  {
    id: 24,
    name: "Jojoba Oil",
    desc: "Balances skin’s natural oils...",
    price: 75,
    category: "oil",
    image: "https://via.placeholder.com/300x300.png?text=Oil+4",
  },
  {
    id: 25,
    name: "Lavender Oil",
    desc: "Calms senses with lavender aroma...",
    price: 55,
    category: "oil",
    image: "https://via.placeholder.com/300x300.png?text=Oil+5",
  },
];


  // Filtering logic
  const filteredProducts = products
    .filter((p) => category === "all" || p.category === category)
    .sort((a, b) => {
      if (filter === "low") return a.price - b.price;
      if (filter === "high") return b.price - a.price;
      return a.id - b.id; // latest by default
    });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading + tagline */}
      <h2 className="text-3xl font-bold text-center mb-2" style={{ color: "#45553d" }}>
        Our Products
      </h2>
      <p className="text-center mb-8 text-gray-600">
        Discover our premium range of fragrances, creams, and serums crafted for timeless beauty.
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 shadow-sm focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
        >
          <option value="latest"> Filter by: Latest</option>
          <option value="low"> Low Price</option>
          <option value="high"> High Price</option>
          <option value="popular"> Popular</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 shadow-sm focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
        >
          <option value="all">Products: All</option>
          <option value="cream">Cream</option>
          <option value="lotion">Lotion</option>
          <option value="serum">Serum</option>
          <option value="sunscreen">Sunscreen</option>
          <option value="oil">Oil</option>
        </select>
      </div>

      {/* Products listing */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[250px] max-w-[250px] bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg mb-1" style={{ color: "#45553d" }}>
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-xl font-bold text-gray-800">${product.price}</span>
              <button
                className="px-3 py-1 bg-[#45553d] text-white  text-sm rounded shadow hover:opacity-90 font-semibold tracking-wide transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
