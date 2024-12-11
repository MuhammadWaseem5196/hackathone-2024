"use client";
import React, { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Navbar from "../components/NevBar";
import FooterComponent from "../components/footer";
const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    if (quantity + change > 0) setQuantity(quantity + change);
  };

  const reviews = [
    {
      name: "Samantha D.",
      stars: 5,
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
      date: "August 14, 2023",
    },
    {
      name: "Alex M.",
      stars: 4,
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
      date: "August 15, 2023",
    },
    {
      name: "Samantha D.",
      stars: 5,
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
      date: "August 14, 2023",
    },
    {
      name: "Alex M.",
      stars: 4,
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
      date: "August 15, 2023",
    }
  ];

  const relatedProducts = [
    { name: "Polo with Contrast Trims", price: 212, discount: "-20%", stars: 4, image: "/Images/er.png" },
    { name: "Gradient Graphic T-shirt", price: 145, stars: 3, image: "/Images/fdf.png" },
    { name: "Polo with Tipping Details", price: 180, stars: 4, image: "/Images/erf.png" },
    { name: "Black Striped T-shirt", price: 120, discount: "-30%", stars: 5, image: "/Images/dlgd.png" },
  ];

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-4 md:p-8 space-y-12">
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="relative overflow-x-hidden lg:h-auto h-[500px] overflow-y-hidden">
          <div className="absolute top-0 left-0 flex lg:flex-col lg:space-y-4 lg:mt-0 mt-[350px] gap-x-1">
            <Image src="/Images/res.png" width={100} height={100} alt="Thumbnail 1" className="w-40 h-[155px] border rounded-xl object-cover" />
            <Image src="/Images/sete.png" width={100} height={100} alt="Thumbnail 1" className="w-40 h-[155px] border rounded-xl object-cover" />
            <Image src="/Images/fhd.png" width={100} height={100} alt="Thumbnail 1" className="w-40 h-[155px] border rounded-xl object-cover" />
          </div>
          <div className="ml-20 lg:ml-44 lg:w-[400px] lg:h-[500px] h-44 w-full   lg:overflow-hidden rounded-xl lg:rounded-xl ">
            <Image src="/Images/sete.png" height={200} width={300} alt="Main Product" className=" lg:w-[450px] lg:h-[900px] h-[550px] mt-8 w-[99%] bg-cover border pb-60 transform lg:-translate-y-[100px] lg:translate-x-0 -translate-x-[80px] rounded-xl" />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="h-5 w-5" />
                ))}
            </div>
            <span className="text-sm text-gray-600">(451 reviews)</span>
          </div>
          <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-black">$260</span>
            <span className="text-2xl font-medium line-through text-gray-400">$300</span>
            
            <span className="text-lg text-red-500 h-6 w-14 px-1 rounded-full  bg-red-100">-40%</span>
          </div>
          <p className="text-gray-600 leading-6">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="space-y-3">
            <h3 className="font-semibold">Select Colors:</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-700 border"></div>
              <div className="w-8 h-8 rounded-full bg-blue-800 border"></div>
              <div className="w-8 h-8 rounded-full bg-gray-600 border"></div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Choose Size:</h3>
            <div className="flex space-x-3">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button key={size} className="px-4 py-2 border rounded-full bg-gray-100 hover:bg-gray-100">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 border bg-gray-300 rounded-full ">
              <button
                className="px-4 py-2 border-l  rounded-full hover:bg-gray-100"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2 border-r  rounded-full hover:bg-gray-100"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <button className="w-full ml-5 bg-black text-white py-3 rounded-full hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="border-t my-8"></div>

      {/* Reviews Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">All Reviews (451)</h2>
          <div className="flex items-center space-x-4">
            <select className="border px-4 py-2 rounded-md">
              <option>Latest</option>
              <option>Oldest</option>
              <option>Top Rated</option>
            </select>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Write a Review</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm bg-white">
              <div className="flex justify-between items-center">
                <div className="flex text-yellow-400">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="h-4 w-4" />
                    ))}
                </div>
              </div>
              <h3 className="flex items-center font-semibold text-lg mt-2">
                {review.name}
                <FaCheckCircle className="ml-2 text-green-500" />
              </h3>
              <p className="mt-2 text-gray-700">{review.text}</p>
              <p className="mt-4 text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="border-t my-8"></div>

      {/* Related Products Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-4">
              <Image width={500} height={500} src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 font-medium text-gray-800">{product.name}</h3>
              <div className="flex text-yellow-400 mt-2">
                {Array(product.stars)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="h-4 w-4" />
                  ))}
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold text-black">${product.price}</span>
                {product.discount && <span className="text-sm text-red-500">{product.discount}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <FooterComponent/>
    </div>
  );
};

export default ProductPage;
