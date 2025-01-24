import { useState } from "react";
import { SiShell } from "react-icons/si";
import { BsReceiptCutoff } from "react-icons/bs";
import { SiSoundcharts } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center bg-yellow-400 p-4 w-full">
      {/* Left Section */}
      <div className="flex items-center space-x-8 max-md:hidden max-sm:hidden">
        <Link to="/">
          <div className="flex flex-col items-center hover:animate-pulse">
            <SiShell className="text-red-500 text-3xl" />
            <span className="text-xs text-gray-700">Dashboard</span>
          </div>
        </Link>
        <Link to="/charts">
          <div className="flex flex-col items-center hover:animate-pulse">
            <SiSoundcharts className="text-red-500 text-3xl" />
            <span className="text-xs text-gray-700">Charts</span>
          </div>
        </Link>
        <Link to="/receipts">
          <div className="flex flex-col items-center hover:animate-pulse">
            <BsReceiptCutoff className="text-red-500 text-3xl" />
            <span className="text-xs text-gray-700">Receipts</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="flex flex-col items-center hover:animate-pulse">
            <BsReceiptCutoff className="text-red-500 text-3xl" />
            <span className="text-xs text-gray-700">About</span>
          </div>
        </Link>
      </div>

      {/* Center Section */}
      <div className="flex-1 text-center">
        <h1 className="font-extrabold text-5xl md:text-4xl text-white">
          <div className="flex justify-center items-center">
            <div>
              <SiShell className="mr-3 text-red-500 sm:inline size-6 max-md:hidden max-sm:hidden" />
            </div>
            <p className="">Shells Fuel Overview</p>
            <div>
              <SiShell className="ml-3 text-red-500 sm:inline size-6 max-sm:hidden" />
            </div>
          </div>
        </h1>
      </div>

      {/* Right Section - Mobile Menu Toggle */}
      <div className="flex items-center lg:hidden md:hidden">
        {/* Mobile Menu */}
        <button
          onClick={toggleMobileMenu}
          className="text-white text-3xl focus:outline-none"
        >
          <SiShell className="ml-3 text-red-500 sm:inline size-10" />
        </button>
      </div>

      {/* Mobile Menu - Collapsible */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-16 right-4 bg-yellow-400 border-2 border-red-500 rounded-lg shadow-lg p-4 w-48 z-50`}
      >
        <Link to="/" className="block text-gray-700 py-2 hover:bg-yellow-500">
          <div className="flex flex-col items-center">
            <SiShell className="text-red-500 text-xl" />
            <span className="text-xs">Dashboard</span>
          </div>
        </Link>
        <Link
          to="/charts"
          className="block text-gray-700 py-2 hover:bg-yellow-500"
        >
          <div className="flex flex-col items-center">
            <SiSoundcharts className="text-red-500 text-xl" />
            <span className="text-xs">Charts</span>
          </div>
        </Link>
        <Link
          to="/receipts"
          className="block text-gray-700 py-2 hover:bg-yellow-500"
        >
          <div className="flex flex-col items-center">
            <BsReceiptCutoff className="text-red-500 text-xl" />
            <span className="text-xs">Receipts</span>
          </div>
        </Link>
        <Link
          to="/about"
          className="block text-gray-700 py-2 hover:bg-yellow-500"
        >
          <div className="flex flex-col items-center">
            <BsReceiptCutoff className="text-red-500 text-xl" />
            <span className="text-xs">About</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
