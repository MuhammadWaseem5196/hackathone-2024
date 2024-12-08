import Image from "next/image";

export default function DressStyle() {
  return (
    <div className="rounded-[30px] lg:px-[70px] px-2 py-[40px] bg-gray-100 lg:w-full w-11/12 max-w-6xl mx-auto mt-10">
      {/* Heading */}
      <h1 className="text-2xl lg:text-4xl font-bold text-center mt-4 mb-8">
        Dress Style Layout
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="col-span-1">
          <div className="relative h-72 bg-white rounded-lg overflow-hidden">
            <Image
              src="/Images/casual1.png"
              alt="Image 1"
              
              layout="fill"
             
              objectFit="cover"
              className=" scale-x-[-1] w-full h-full "
            />
            <div className="absolute top-0 left-0 p-4">
              <h2 className="text-black text-xl font-semibold">Casual Style</h2>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2">
          <div className="relative h-72 bg-white rounded-lg overflow-hidden">
            <Image
              src="/Images/formal.png"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="w-full h-full translate-x-40"
            />
            <div className="absolute top-0 left-0 p-4">
              <h2 className="text-black text-xl font-semibold">Formal Style</h2>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2">
          <div className="relative h-72 bg-white rounded-lg overflow-hidden">
            <Image
              src="/Images/party.png"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute top-0 left-0 p-4">
              <h2 className="text-black text-xl font-semibold">Street Style</h2>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <div className="relative h-72 bg-white rounded-lg overflow-hidden">
            <Image
              src="/Images/gym.png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute top-0 left-0 p-4">
              <h2 className="text-black text-xl font-semibold">Elegant Style</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
