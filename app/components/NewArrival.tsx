import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

interface Card {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: string;
  discountPrice?: string;
  discountPercent?: string;
}

export default function NewArrival() {
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
  ];
  const cards1: Card[] = [
    {
      id: 1,
      image: "/Images/glf.png",
      title: "Product Name",
      rating: 4.5,
      price: "$120.00",
    },
    {
      id: 2,
      image: "/Images/erf.png",
      title: "Another Product",
      rating: 4.2,
      price: "$150.00",
      discountPrice: "$120.00",
      discountPercent: "20% OFF",
    },
    {
      id: 3,
      image: "/Images/gd.png",
      title: "Product Name",
      rating: 4.5,
      price: "$120.00",
    },
    {
      id: 4,
      image: "/Images/fj.png",
      title: "Product Name",
      rating: 4.5,
      price: "$120.00",
    },
  ];

     

  return (
    <div className="mt-8 w-full  flex justify-center">
      <div className="w-full max-w-[1200px]">
        {/* Section Title */}
        <div className="lg:text-4xl text-3xl text-center font-extrabold">New Arrival</div>

        {/* Cards Section */}
        <div className="w-full px-4 py-4 mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="overflow-hidden ">
                {/* Card Image */}
                <Link href={"/Productcard"}>
                <div  className="h-56 border-2 border-[#F0EEED] bg-[#F0EEED] rounded-xl w-full relative ">
                  <Image
                  width={500}
                  height={300}
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full border-[#F0EEED] rounded-xl"
                  />
                </div>
                </Link> 

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
          <div className="w-full flex justify-center items-center"><div className="lg:text-sm lg:w-28 lg:pt-1 text-center border-2 border-gray-200 rounded-full w-11/12 h-8 pt-2 text-[10px]">View All</div></div>
          <div className="w-full mt-8"> <hr /> </div>
        <div className="lg:text-4xl text-3xl text-center font-extrabold mt-8">Top Selling</div>
                    
        <div className="w-full px-4 py-4 mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {cards1.map((card) => (
              <Link href={"/Productcard"}>
                <div key={card.id} className="overflow-hidden ">
                {/* Card Image */}
                <div className="h-56 border-2 border-[#F0EEED] bg-[#F0EEED] rounded-xl w-full relative">
                  <Image
                  height={500}
                  width={300}
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full border-[#F0EEED] rounded-xl"
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
              </Link>
            ))}
            
          </div>
        </div>
        <div className="w-full flex justify-center items-center"><div className="lg:text-sm lg:w-28 lg:pt-1 text-center border-2 border-gray-200 rounded-full w-11/12 h-8 pt-2 text-[10px]">View All</div></div>
         

      </div>
    </div>
  );
}
