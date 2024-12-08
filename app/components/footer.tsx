import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiVisa, SiGooglepay, SiApplepay, SiPaypal, SiMastercard } from 'react-icons/si';

export default function FooterComponent() {
  // Define an array for the sections
  const sections = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog']
    },
    {
      title: 'Help',
      links: ['Customer Service', 'Returns', 'Shipping', 'FAQ']
    },
    {
      title: 'FAQ',
      links: ['How to Order', 'Payment Methods', 'Track Order', 'Returns Policy']
    },
    {
      title: 'Resources',
      links: ['Affiliate Program', 'Gift Cards', 'Accessibility', 'Privacy Policy']
    },
  ];

  return (
    <div className="relative z-10">
      {/* First section: Newsletter Subscription */}
      <div className="w-[80%] mx-auto bg-black text-white py-12 px-4 rounded-xl mt-16 -mb-[100px] z-40">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left side heading */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-0">Subscribe for Newsletter</h1>

          {/* Right side input field and button */}
          <div className="relative flex justify-center text-black flex-col items-center w-full lg:w-1/3">
            <FaEnvelope className="absolute left-4 top-3 text-black text-xl" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 py-3 rounded-full bg-white text-black placeholder-gray-400 mb-4 lg:mb-0"
            />
            <button className="bg-white mt-3 text-black px-4 py-2 rounded-full w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Second section: Footer Content */}
      <div className="w-full pl-12 bg-[#F0F0F0] relative z-[-1]">
        <div className="">
          <div className="relative bg-[#F0F0F0] text-black pt-36 pb-6 -z-[10]">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5  lg:gap-6 pl-16">
              {/* Company info column */}
              <div className="col-span-1">
                <h3 className="text-2xl font-bold">Shop.co</h3>
                <p className="mt-4 text-sm text-black">
                  Shop.co is a leading <br /> e-commerce platform <br /> prices.
                </p>
                <div className="mt-6 flex gap-4">
                  <FaFacebookF className="text-xl cursor-pointer" />
                  <FaTwitter className="text-xl cursor-pointer" />
                  <FaInstagram className="text-xl cursor-pointer" />
                  <FaLinkedin className="text-xl cursor-pointer" />
                </div>
              </div>

              {/* Map through sections */}
              {sections.map((section, idx) => (
                <div key={idx} className="col-span-1">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-black">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a href="#" className="hover:text-green-500">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <hr />
        </div>

        {/* Payment methods and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-6 px-4">
          <div className="text-sm text-black">
            &copy; 2024 Shop.co. All Rights Reserved.
          </div>
          <div className="flex gap-4 mt-4 mb-6">
            {/* Card Logos */}
            <SiVisa className="text-2xl text-blue-500" />
            <SiPaypal className="text-2xl text-blue-700" />
            <SiGooglepay className="text-2xl text-green-500" />
            <SiApplepay className="text-2xl text-black" />
            <SiMastercard className="text-2xl text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
