"use client";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { useState } from "react"; // Import useState for handling state

const testimonials = [
  {
    rating: 4,
    name: "John Doe",
    remarks:
      "Excellent product quality. The material feels premium, and delivery was swift. Would recommend it to others!",
  },
  {
    rating: 5,
    name: "Jane Smith",
    remarks:
      "Absolutely loved the design and fit! Great customer service and fast shipping. Highly satisfied!",
  },
  {
    rating: 4,
    name: "Samuel Green",
    remarks:
      "Good value for money. Stylish and comfortable. Will definitely shop again soon. Highly recommended!",
  },
  {
    rating: 5,
    name: "Emma Brown",
    remarks:
      "Loved the packaging and the product. Truly worth every penny. Exceptional quality and comfort!",
  },
  {
    rating: 4,
    name: "Chris Taylor",
    remarks:
      "Nice experience overall. The design and fit are great. Delivery took a bit longer, but still happy with the purchase.",
  },
];

export default function ReviewComponent() {
  // State to keep track of the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4 overflow-hidden">
      {/* Heading with Arrows */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl lg:text-4xl font-bold">Customer Reviews</h1>
        <div className="flex gap-2">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={handlePrev}
          >
            <FaArrowLeft className="text-lg lg:text-xl text-gray-600" />
          </button>
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={handleNext}
          >
            <FaArrowRight className="text-lg lg:text-xl text-gray-600" />
          </button>
        </div>
      </div>

      {/* Container with border */}
      <div className="relative border-3 border-gray-300 py-4 sm:w-full sm:px-0">
        {/* Flex container for testimonials */}
        <div
          className="flex gap-4 sm:w-full lg:flex-row sm:overflow-x-hidden sm:justify-start sm:items-center sm:h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.3s ease",
            display: "flex",
            width: "100%",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-80 flex-shrink-0"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-400 ${
                      i < testimonial.rating ? "fill-current" : "opacity-30"
                    }`}
                  />
                ))}
              </div>

              {/* Name with Verified Check */}
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <BsCheck className="text-white" />
                </div>
              </div>

              {/* Remarks */}
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {testimonial.remarks}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
