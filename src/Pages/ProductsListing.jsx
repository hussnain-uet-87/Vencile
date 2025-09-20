import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";
import {ProductsList} from "../constants/ProductsList"

export default function ProductsPage() {
  const [filter, setFilter] = useState("latest");
  const [category, setCategory] = useState("all");




  // Filtering logic
  const filteredProducts = ProductsList
    .filter((p) => category === "all" || p.category === category)
    .sort((a, b) => {
      if (filter === "low") return a.actualPrice - b.actualPrice;
      if (filter === "high") return b.actualPrice - a.actualPrice;
      return a.id - b.id; // latest by default
    });
``
  return (
    <div className="max-w-6xl mt-12 mx-auto px-6 py-10">
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
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-3"
              src={product.mainImage}
            />
            <h3 className="font-semibold text-lg mb-1" style={{ color: "#45553d" }}>
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{product.basicDesc}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-xl font-bold text-gray-800">Rs.{product.discountedPrice}</span>
              <Link
                to={`/products/${product.id}`}
                className="cursor-pointer px-3 py-1 bg-[#45553d] text-white  text-sm rounded shadow hover:opacity-90 font-semibold tracking-wide transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
