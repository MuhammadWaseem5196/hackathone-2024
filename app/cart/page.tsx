// CartComponent.tsx
import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Navbar from "../components/NevBar";
import FooterComponent from "../components/footer";

const CartComponent: React.FC = () => {
  return (
    <div>
        <Navbar/>
    <div className="w-[95%] mx-auto mt-8 p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cart Items Section */}
      <div className="lg:w-[90%] md:col-span-2 ">
        <h1 className="text-3xl font-extrabold mb-6 ">Your Cart</h1>

        <div className="space-y-6 ">
          {/* Item 1 */}
          <div className="flex items-start justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/Images/dlgd.png"
                alt="Gradient Graphic T-shirt"
                width={80}
                height={80}
                className="object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-medium">Gradient Graphic T-shirt</h2>
                <p className="text-sm text-black mb-2">Size: Large <br /> Color: White</p>
                <p className="text-lg font-medium">$145</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <button  className="text-red-500 top-0 -mr-10 mb-10"><MdDelete className="text-2xl"/></button>
              <div className="flex items-center justify-center border px-3 py-1 rounded-full bg-gray-300 w-20">
                <button className="text-black">-</button>
                <span className="mx-2">1</span>
                <button className="text-black">+</button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/Images/er.png"
                alt="Checkered Shirt"
                width={80}
                height={80}
                className="object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-medium">Checkered Shirt</h2>
                <p className="text-sm text-black mb-2">Size: Medium <br /> Color: Red</p>
                <p className="text-lg font-medium">$180</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
            <button  className="text-red-500 top-0 -mr-10 mb-10"><MdDelete className="text-2xl"/></button>
            <div className="flex items-center justify-center border px-3 py-1 rounded-full bg-gray-300 w-20">
                <button className="text-black">-</button>
                <span className="mx-2">1</span>
                <button className="text-black">+</button>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start justify-between border-b pb-4 ">
            <div className="flex items-center space-x-4 relative">
              <Image
                src="/Images/fdf.png"
                alt="Skinny Fit Jeans"
                width={80}
                height={80}
                className="object-contain rounded"
              />
              <div>
                <h2 className="text-lg font-medium">Skinny Fit Jeans</h2>
                <p className="text-sm text-black mb-2">Size: Large <br /> Color: Blue</p>
                <p className="text-lg font-medium">$240</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
            <button  className="text-red-500 top-0 -mr-10 mb-10"><MdDelete className="text-2xl"/></button>
              <div className="flex items-center justify-center border px-3 py-1 rounded-full bg-gray-300 w-20">
                <button className="text-black">-</button>
                <span className="mx-2">1</span>
                <button className="text-black">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="bg-white border  p-6 rounded-lg lg:h-[80%] mt-10 lg:-ml-20 ">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$565</p>
          </div>
          <div className="flex justify-between">
            <p>Discount (-20%)</p>
            <p className="text-red-500">-$113</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>$15</p>
          </div>
        </div>
        <hr className="w-full border mt-6 mb-6" />
        <div className="flex justify-between mb-8">
            <p className="font-extrabold">Sub Total</p>
            <p>$155</p>
          </div>
        <div className="flex justify-between items-center mt-4  space-x-2">
          <input
            type="text"
            placeholder="Add promo code"
            className="flex-grow border px-4 py-2 rounded-full w-[70%]"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Apply
          </button>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-full mt-4">
          Go to Checkout ➔
        </button>
      </div>
    </div>
    <FooterComponent/>
    </div>
  );
};

export default CartComponent;
