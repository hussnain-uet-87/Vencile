import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { ProductsList } from "../constants/ProductsList";
import { Link } from "react-router-dom";


export default function ProductDetails({ addToCart, cart }) {
  const { id } = useParams(); // get id from url

  const product = ProductsList.find((p) => p.id === Number(id));
  if (!product) {
    return <p className="p-6 text-red-500">Product Not Found</p>;
  }

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % product.sliderImages.length);
  const prevSlide = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + product.sliderImages.length) % product.sliderImages.length
    );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-[#f9faf9] mt-12  min-h-screen py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Image Slider */}
        <div className="relative">
          <img
            key={current}
            src={product.sliderImages[current]}
            alt={`${product.title}${current}`}
            className="rounded-lg shadow-md h-[340px] bg-red-200 w-full object-cover"
          />
          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-xl cursor-pointer bg-white/70 p-2 rounded-full shadow hover:bg-white"
          >
            <RiArrowLeftSLine />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xl cursor-pointer bg-white/70 p-2 rounded-full shadow hover:bg-white"
          >
            <RiArrowRightSLine />
          </button>
        </div>

        {/* Center - Product Info */}
        <div className="lg:col-span-1">
          <h1 className="text-2xl font-semibold text-[#45553d]">
            {product.title}
          </h1>
          <div className="flex items-center mt-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {product.ratedBy} Ratings
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Brand:{" "}
            <span className="text-blue-600 cursor-pointer">
              Vencile Products
            </span>
          </p>

          {/* Price */}
          <div className="mt-4">
            <p className="text-3xl font-bold text-[#45553d]">
              Rs. {product.discountedPrice}
            </p>
            <p className="text-gray-500 line-through text-sm">
              Rs. {product.actualPrice}
            </p>
            <p className="text-green-600 text-sm">
              -{product.discountPercent}%
            </p>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <p className="text-sm font-medium text-gray-700">Quantity:</p>
            <div className="flex items-center border rounded-lg overflow-hidden shadow">
              <button
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="px-3 py-1 text-lg cursor-pointer bg-gray-100"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-lg  cursor-pointer bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Link to="/products/cart" onClick={()=>{addToCart({...product,quantity})}} className="flex-1 bg-[#45553d] text-white py-3 rounded-lg text-center shadow hover:bg-[#36432f] transition">
              Buy Now
            </Link>
            <button
              onClick={() => {
                addToCart({ ...product, quantity});
                alert("Product Added to Cart Successfully!");
              }}
              className="flex-1 bg-[#e0ecda] text-[#45553d] py-3 rounded-lg shadow hover:bg-[#c9d9c3] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right - Delivery & Warranty */}
        <div className="space-y-6">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="font-semibold text-[#45553d]">Delivery Options</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-600 underline">
                Sindh, Karachi - Gulshan-e-Iqbal
              </p>
              <button
                onClick={() => {
                  alert("You can change Address in Final Checkout Page");
                }}
                className="cursor-pointer text-sm font-medium text-blue-600 hover:underline"
              >
                Change Address
              </button>
            </div>
            <p className="text-sm text-gray-600">
              <span className="mr-2 text-lg">•</span>Standard Delivery: Rs. 125
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <span className="mr-2 text-lg">•</span> Cash on Delivery Available
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="font-semibold text-[#45553d]">Return & Warranty</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>14 days easy return</li>
              <li>1 Year Quality Warranty</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="font-semibold text-[#45553d]">Seller</h2>
            <p className="text-sm text-gray-600">Sold by: Vencile Official</p>
          </div>
        </div>
      </div>
      {/* Product Details Section */}
      <div className="max-w-[820px]  mt-12">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-[#45553d] mb-4">
            Product Details
          </h2>
          <p className="text-sm text-gray-600 mb-4">{product.basicDesc}</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-6">
            <li>{product.explainedDesc[0]}</li>
            <li>{product.explainedDesc[1]}</li>
            <li>{product.explainedDesc[2]}</li>
            <li>{product.explainedDesc[3]}</li>
          </ul>
          <button className="cursor-pointer bg-[#45553d] text-white px-6 py-2 rounded-lg shadow hover:bg-[#36432f] transition">
            Ask a Question
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-[820px] mt-12">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-[#45553d] mb-4">
            Customer Reviews
          </h2>

          {/* Review 1 */}
          {product.reviews.map((r, i) => (
            <div className="border-b pb-4 mb-4">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">{r.reviewText}</p>
              <p className="text-xs text-gray-500 mt-1">- {r.customerName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
