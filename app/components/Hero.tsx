import Image from "next/image";
import { SiZara } from "react-icons/si";

export default function Hero() {
  return (
    <div className=" w-full overflow-hidden ">
      {/* for text and image area */}
      <div className="flex flex-col lg:flex-row lg:mt-5 max-w-full">
        {/* div contain text */}
        <div className="lg:w-1/2 w-full lg:h-[500px]  flex flex-col lg:flex-grow lg:flex-shrink-0 box-border">
          {/* div text area */}
          <div className="bg-[#F2F0F1] lg:pl-20 h-full w-full lg:p-[50px] p-8 pt-10">
            <div className="">
            <span className="font-extrabold lg:text-7xl text-5xl text-left leading-7">
                Find Clothes That Match Your Style
              </span>
              <p className="lg:text-sm lg:mt-7 mt-4 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                amet consectetur adipisicing elit. Veniam quos nam deleniti error
                deleniti error.
              </p>
              <span className="lg:w-1/4 w-full lg:h-10 h-12 border-2 lg:pt-[5px] pt-3 bg-black text-white border-black rounded-full mt-6 block text-center">
                Shop Now
              </span>
            </div>
          </div>
        </div>

        {/* div contain image */}
        <div className="lg:w-1/2 w-full lg:h-[500px] lg:overflow-hidden lg:relative h-[500px]  relative overflow-hidden">
          <Image
            src="/Images/hero.jpg"
            alt="image"
            width={400}
            height={300}
            className="lg:absolute lg:transform lg:-top-7 lg:h-[750px] left-0 w-full absolute"
          />
        </div>
      </div>

      {/* for footer area */}
      <div className="flex flex-wrap  lg:gap-20 gap-4 gap-y-0  bg-black text-white w-full h-20 border-2 border-black justify-center items-center">
        
         <span className="lg:text-4xl text-xl">VERSACE</span>
        <span><SiZara className="lg:text-6xl text-4xl" /></span>
        <span className="lg:text-4xl text-xl">GUCCI</span>
        <span className="lg:text-4xl text-xl font-extrabold">PRADA</span>
        <span className="lg:text-4xl text-xl font-extralight">KELVIN CELVIN</span>
      </div>
    </div>
  );
}
