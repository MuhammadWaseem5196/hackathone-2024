// import React from 'react';
// import Image from 'next/image';

// const CategoryPage = () => {
//   return (
//     <div className="flex flex-wrap p-4">
//       {/* Filters Sidebar */}
//       <aside className="hidden md:block w-1/5 p-4 border-r border-gray-200">
//         <h3 className="text-lg font-semibold mb-4">Filters</h3>
//         <div className="mb-6">
//           <h4 className="text-md font-medium mb-2">Price</h4>
//           <input type="range" min="50" max="200" defaultValue="125" className="w-full" />
//         </div>
//         <div className="mb-6">
//           <h4 className="text-md font-medium mb-2">Colors</h4>
//           <div className="flex space-x-2">
//             <button className="w-6 h-6 bg-red-500 rounded-full"></button>
//             <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
//             {/* Add more colors */}
//           </div>
//         </div>
//         <div className="mb-6">
//           <h4 className="text-md font-medium mb-2">Size</h4>
//           <div className="flex flex-wrap gap-2">
//             <button className="px-3 py-1 border border-gray-300 rounded">Small</button>
//             <button className="px-3 py-1 border border-gray-300 rounded">Medium</button>
//             {/* Add more sizes */}
//           </div>
//         </div>
//         <div>
//           <h4 className="text-md font-medium mb-2">Dress Style</h4>
//           <div className="flex flex-wrap gap-2">
//             <button className="px-3 py-1 border border-gray-300 rounded">Casual</button>
//             <button className="px-3 py-1 border border-gray-300 rounded">Formal</button>
//             {/* Add more styles */}
//           </div>
//         </div>
//       </aside>

//       {/* Products Grid */}
//       <main className="w-full md:w-4/5 flex flex-wrap gap-4 p-4">
//         <div className="w-full sm:w-1/2 lg:w-1/4 p-2 border border-gray-200 rounded">
//           <Image
//             src="/product1.jpg"
//             alt="Gradient Graphic T-shirt"
//             width={300}
//             height={300}
//             className="w-full h-auto rounded"
//           />
//           <h4 className="text-lg font-medium mt-2">Gradient Graphic T-shirt</h4>
//           <p className="text-gray-700 font-bold">$145</p>
//         </div>
//         <div className="w-full sm:w-1/2 lg:w-1/4 p-2 border border-gray-200 rounded">
//           <Image
//             src="/product2.jpg"
//             alt="Polo with Tipping Details"
//             width={300}
//             height={300}
//             className="w-full h-auto rounded"
//           />
//           <h4 className="text-lg font-medium mt-2">Polo with Tipping Details</h4>
//           <p className="text-gray-700 font-bold">$180</p>
//         </div>
//         {/* Add more products */}
//       </main>

//       {/* Pagination */}
//       <div className="w-full flex justify-center mt-6">
//         <button className="px-4 py-2 bg-gray-800 text-white rounded mr-2">&laquo; Previous</button>
//         <button className="px-4 py-2 bg-gray-800 text-white rounded mr-2">1</button>
//         <button className="px-4 py-2 bg-gray-800 text-white rounded mr-2">2</button>
//         <button className="px-4 py-2 bg-gray-800 text-white rounded">Next &raquo;</button>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
