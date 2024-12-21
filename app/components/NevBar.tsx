"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

// Define the types for the "slides"
interface Types1 {
  text: string;
  link: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);

  // Define slides with proper typing
  const slides: Types1[] = [
    { text: "Home", link: "/" },
    { text: "Shop Category 2", link: "/shop/category2" },
    { text: "Shop Category 3", link: "/shop/category3" },
    { text: "Shop Category 4", link: "/shop/category4" },
  ];

  // Fixing the type of event to MouseEvent and casting event.target as Element
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Type assertion to ensure event.target is an Element
      const target = event.target as Element;

      if (
        !target.closest(".shop-dropdown") &&
        !target.closest(".shop-button")
      ) {
        setIsShopOpen(false);
      }
      if (
        !target.closest(".mobile-search-bar") &&
        !target.closest(".mobile-search-trigger")
      ) {
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Discount Banner */}
      <div className=" bg-black text-white text-center py-2">
        <p>Free Shipping on Orders Over $50!</p>
      </div>

      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 w-full max-w-screen-xl">
          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center text-gray-700"
          >
            <AiOutlineMenu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center flex-grow">
            <Link href="/">
              <Image
                src="/Images/Capture.JPG" // Ensure logo.png is in the public folder
                alt="Logo"
                width={120}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 w-[85%] justify-center">
            {/* Shop with Dropdown */}
            <div className="relative shop-dropdown">
              <button
                onClick={() => setIsShopOpen(!isShopOpen)}
                className="flex items-center text-gray-600 hover:text-black shop-button"
              >
                Shop <AiOutlineDown className="ml-2 text-gray-600" />
              </button>
              {isShopOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg w-48">
                  <ul className="py-2">
                    {slides.map((slide: Types1, index: number) => (
                      <li key={index}>
                        <Link
                          href={slide.link}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {slide.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link href="/sale" className="text-gray-600 hover:text-black">
              On Sale
            </Link>
            <Link href="/new-arrivals" className="text-gray-600 hover:text-black">
              New Arrivals
            </Link>
            <Link href="/brands" className="text-gray-600 hover:text-black">
              Brand
            </Link>

            {/* Search Bar */}
            <div className="relative flex items-center w-1/2 ">
              <AiOutlineSearch className="absolute left-4 text-gray-400 top-1/2 transform -translate-y-1/2 " />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 pl-10 pr-4 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F0F0F0]"
              />
            </div>

            {/* Cart and Account Icons */}
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <FaShoppingCart className="text-xl text-gray-700 cursor-pointer" />
              </Link>
              <Link href="/account">
                <FaUserAlt className="text-xl text-gray-700 cursor-pointer" />
              </Link>
            </div>
          </nav>

          {/* Mobile Icons */}
          <div className="flex lg:hidden space-x-4 items-center relative">
            {/* Search Icon */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="text-gray-700 text-2xl cursor-pointer mobile-search-trigger"
            >
              <AiOutlineSearch />
            </button>

            {/* Search Bar */}
            {isMobileSearchOpen && (
              <div className="absolute top-full right-0 mt-2 w-[200px]  bg-white border border-gray-300 rounded-full p-2 shadow-lg mobile-search-bar">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 text-sm border-none rounded-full focus:outline-none h-6"
                />
              </div>
            )}

            {/* Cart */}
            <Link href="/cart">
              <FaShoppingCart className="text-gray-700 text-xl cursor-pointer" />
            </Link>
            {/* Account */}
            <Link href="/account">
              <FaUserAlt className="text-gray-700 text-xl cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="bg-white w-2/3 h-full flex flex-col p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 text-2xl self-end"
              >
                X
              </button>

              {/* Mobile Shop Links */}
              <div className="space-y-4">
                {slides.map((slide: Types1, index: number) => (
                  <Link
                    key={index}
                    href={slide.link}
                    className="text-gray-600 hover:text-black block py-2"
                  >
                    {slide.text}
                  </Link>
                ))}
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col space-y-6 mt-4">
                <li>
                  <Link href="/sale" className="text-gray-600 hover:text-black">
                    On Sale
                  </Link>
                </li>
                <li>
                  <Link href="/new-arrivals" className="text-gray-600 hover:text-black">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-gray-600 hover:text-black">
                    Brand
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
