"use client"

import FooterComponent from "../components/footer";
import Navbar from "../components/NevBar";
import { LuSlidersVertical } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { HiXCircle } from "react-icons/hi";




interface Card {
    id: number;
    image: string;
    title: string;
    rating: number;
    price: string;
    discountPrice?: string;
    discountPercent?: string;
  }

export default function CategoryPage() {
                 
      const [issidebar , setsidebar]=useState<boolean>(false);

      function sidebaraction (){
        setsidebar(!issidebar)
      }
         
    const cards: Card[] = [
        {
          id: 1,
          image: "/Images/dref.png",
          title: "Product Name",
          rating: 4.5,
          price: "$120.00",
        },
        {
          id: 2,
          image: "/Images/shurts.png",
          title: "Another Product",
          rating: 4.2,
          price: "$150.00",
          discountPrice: "$120.00",
          discountPercent: "20% OFF",
        },
        {
          id: 3,
          image: "/Images/pents.png",
          title: "Product Name",
          rating: 4.5,
          price: "$120.00",
        },
        {
          id: 4,
          image: "/Images/shirt1.png",
          title: "Product Name",
          rating: 4.5,
          price: "$120.00",
        },
        {
            id: 5,
            image: "/Images/dref.png",
            title: "Product Name",
            rating: 4.5,
            price: "$120.00",
          },
          {
            id: 6,
            image: "/Images/shurts.png",
            title: "Another Product",
            rating: 4.2,
            price: "$150.00",
            discountPrice: "$120.00",
            discountPercent: "20% OFF",
          },
          {
            id: 7,
            image: "/Images/pents.png",
            title: "Product Name",
            rating: 4.5,
            price: "$120.00",
          },
          {
            id: 8,
            image: "/Images/shirt1.png",
            title: "Product Name",
            rating: 4.5,
            price: "$120.00",
          },
          {
            id: 9,
            image: "/Images/shirt1.png",
            title: "Product Name",
            rating: 4.5,
            price: "$120.00",
          },
      ];

  return (
    <div>
      <Navbar />

      <div className="w-full flex justify-center mt-6  overflow-x-hidden">
        <div className="flex  w-[93%] lg:justify-between justify-center">
          {/* Filter Section */}
          {issidebar && (<div className="w-[95%] px-6 py-4 border border-gray-400 h-auto rounded-xl absolute lg:hidden sm:block z-50 bg-white">
            <div className="flex justify-between"><h1 className="font-bold">Filters</h1>  <HiXCircle  size={24} onClick={sidebaraction} className="cursor-pointer text-black" /></div>
            <hr className="mt-4 mb-4 border"/>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">T-shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Shorts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Hoodies</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Jeans</h1><FaAngleRight className="opacity-70 text-sm" /></div>
              <hr className="mb-4 border mt-2" />
            <div className="flex justify-between items-center mb-6 "><h1 className="">Price</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
                <div>
                    <div className="w-full h-2 bg-gray-200 relative rounded-full flex justify-center items-center"><div className="w-4 h-4 rounded-full bg-black transform translate-x-2"></div> <div className="w-[50%] bg-black h-full rounded-full"></div><div className="w-4 h-4 rounded-full bg-black transform -translate-x-2"></div> </div>
                    <div className="px-9 flex justify-between mt-1">
                            <div>24$</div>
                            <div>54$</div>
                    </div>
                    
                </div>

                 <hr className="border mt-6 mb-4" />


                <div className="flex justify-between items-center mb-6 "><h1 className="">Price</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
                 <div className="grid grid-cols-5 grid-rows-2 gap-y-2">
                    <div className="w-7 h-7 rounded-full bg-green-500"></div>
                    <div className="w-7 h-7 rounded-full bg-blue-500"></div>
                    <div className="w-7 h-7 rounded-full bg-yellow-500"></div>
                    <div className="w-7 h-7 rounded-full bg-red-500"></div>
                    <div className="w-7 h-7 rounded-full bg-violet-500"></div>
                    <div className="w-7 h-7 rounded-full bg-orange-500"></div>
                    <div className="w-7 h-7 rounded-full bg-white border"></div>
                    <div className="w-7 h-7 rounded-full bg-black"></div>
                    <div className="w-7 h-7 rounded-full bg-sky-500"></div>
                    <div className="w-7 h-7 rounded-full bg-stone-500"></div>
                 </div>

                 <hr className="border mt-6 mb-4 " />
                 <div className="flex justify-between items-center mb-6 "><h1 className="">Size</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
                <div className="  flex flex-wrap  ">
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">X-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                   
                   
                </div>
                <hr className="border mt-6 mb-4 " />
                 <div className="flex justify-between items-center mb-6 "><h1 className="">Dress Style</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
            <div className="flex justify-between items-center mb-2 text-sm"><h1 className="opacity-45">T-shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 text-sm"><h1 className="opacity-45">Shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 text-sm"><h1 className="opacity-45">Shorts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-4 text-sm"><h1 className="opacity-45">Hoodies</h1><FaAngleRight className="opacity-70 text-sm" /></div>
           
           <div className="bg-black text-center h-10 mt-6 rounded-full text-white py-2">Apply Now</div>
                
          </div>)}
          <div className="w-1/4 px-6 py-4 border border-gray-400 h-[80%] rounded-xl hidden sm:block ">
            <div className="flex justify-between"><h1 className="font-bold">Filters</h1>  <LuSlidersVertical size={20} className="cursor-pointer text-gray-400" /></div>
            <hr className="mt-4 mb-4 border"/>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">T-shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Shorts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Hoodies</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 "><h1 className="opacity-45">Jeans</h1><FaAngleRight className="opacity-70 text-sm" /></div>
              <hr className="mb-4 border mt-2" />
            <div className="flex justify-between items-center mb-6 "><h1 className="">Price</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
                <div>
                    <div className="w-full h-2 bg-gray-200 relative rounded-full flex justify-center items-center"><div className="w-4 h-4 rounded-full bg-black transform translate-x-2"></div> <div className="w-[50%] bg-black h-full rounded-full"></div><div className="w-4 h-4 rounded-full bg-black transform -translate-x-2"></div> </div>
                    <div className="px-9 flex justify-between mt-1">
                            <div>24$</div>
                            <div>54$</div>
                    </div>
                    
                </div>

                 <hr className="border mt-6 mb-4" />


                <div className="flex justify-between items-center mb-6 "><h1 className="">Price</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
                 <div className="grid grid-cols-5 grid-rows-2 gap-y-2">
                    <div className="w-7 h-7 rounded-full bg-green-500"></div>
                    <div className="w-7 h-7 rounded-full bg-blue-500"></div>
                    <div className="w-7 h-7 rounded-full bg-yellow-500"></div>
                    <div className="w-7 h-7 rounded-full bg-red-500"></div>
                    <div className="w-7 h-7 rounded-full bg-violet-500"></div>
                    <div className="w-7 h-7 rounded-full bg-orange-500"></div>
                    <div className="w-7 h-7 rounded-full bg-white border"></div>
                    <div className="w-7 h-7 rounded-full bg-black"></div>
                    <div className="w-7 h-7 rounded-full bg-sky-500"></div>
                    <div className="w-7 h-7 rounded-full bg-stone-500"></div>
                 </div>

                 <hr className="border mt-6 mb-4 " />
                 <div className="flex justify-between items-center mb-6 "><h1 className="">Size</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
                <div className="  flex flex-wrap  ">
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">X-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XX-Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                    <span className="px-4 mb-1  h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">Small</span>
                    <span className="px-4 mb-1 ml-2 h-7  py-2 text-center rounded-full bg-gray-200 text-[10px] ">XXXX-Small</span>
                   
                   
                </div>
                <hr className="border mt-6 mb-4 " />
                 <div className="flex justify-between items-center mb-6 "><h1 className="">Dress Style</h1><RiArrowUpSLine className="opacity-70 text-xl" /></div>
            <div className="flex justify-between items-center mb-2 text-sm"><h1 className="opacity-45">T-shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 text-sm"><h1 className="opacity-45">Shirts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-2 text-sm"><h1 className="opacity-45">Shorts</h1><FaAngleRight className="opacity-70 text-sm" /></div>
            <div className="flex justify-between items-center mb-4 text-sm"><h1 className="opacity-45">Hoodies</h1><FaAngleRight className="opacity-70 text-sm" /></div>
           
           <div className="bg-black text-center h-10 mt-6 rounded-full text-white py-2">Apply Now</div>
                
          </div>

          {/* Item Sections */}
          <div className="w-full relative   pl-3 ">
           <div className="flex justify-between mb-6">
            <div className="text-3xl">Casual</div>
            <div className="text-sm flex"><h1 className="flex items-center pt-3 text-[13px] ">Showing 1-10 from 100 products  <LuSlidersVertical size={20} onClick={sidebaraction} className="cursor-pointer  ml-3 lg:hidden" /> </h1> <h1 className="lg:flex items-center pt-3 hidden sm:block">&nbsp; shorted by &nbsp;<b> Most popular &nbsp;  </b> <FaAngleDown /></h1></div> 
           </div>
           <div className="w-full mt-2">
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="overflow-hidden ">
                {/* Card Image */}
               
                <div  className="lg:h-72 h-44 border-2 border-[#F0EEED] bg-[#F0EEED] rounded-xl  relative ">
                  <Image
                  width={500}
                  height={300}
                    src={card.image}
                    alt={card.title}
                    className="object-cover   w-[90%] h-[95%] mt-1 border-[#F0EEED] mx-2 rounded-xl"
                  />
                </div>
                

                {/* Card Content */}
                <div className="p-4 ">
                  <h2 className="lg:text-lg text-sm font-semibold text-gray-800">{card.title}</h2>
                  <div className="flex items-center text-yellow-400 text-sm mt-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <AiFillStar
                        key={index}
                        className={index < Math.round(card.rating) ? "" : "text-gray-300"}
                      />
                    ))}
                    <span className="ml-2 text-gray-600 text-xs">({card.rating})</span>
                  </div>
                  <div className="mt-2 ">
                    <span className="text-green-500 text-base font-bold ">{card.price}</span>
                    {card.discountPrice && (
                      <>
                        {/* Discount Price */}
                        <span className="text-gray-500 text-sm line-through ml-2">
                          {card.discountPrice}
                        </span>

                        {/* Discount Percent */}
                        <span className="text-red-500 text-xs ml-2 block sm:inline">
                          {card.discountPercent}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

           </div>



          </div>






        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
