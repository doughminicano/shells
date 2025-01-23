import { SiShell } from "react-icons/si";
import { BsReceiptCutoff } from "react-icons/bs";
import { SiSoundcharts } from "react-icons/si";
import { MdOutlineDescription } from "react-icons/md";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center bg-yellow-400 p-4 w-full z-10">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
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
      </div>

      {/* Center Section */}
      <div className="flex-1 text-center">
        <h1 className="font-extrabold text-2xl md:text-4xl text-white">
          <div className="flex justify-center items-center">
            <SiShell className="mr-3 text-red-500 hidden sm:inline size-6" />
            <p className="max-sm:text-sm">Shells Fuel Overview</p>
            <SiShell className="ml-3 text-red-500 hidden sm:inline size-6" />
          </div>
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <Link to="/about">
          <div className="flex flex-col items-center hover:animate-pulse">
            <MdOutlineDescription className="text-red-500 text-3xl" />
            <span className="text-xs text-gray-700">About</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
