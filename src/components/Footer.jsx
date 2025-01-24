import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
//   FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black/25 p-6 mt-5">
      {/* Top Section: Social Media Links */}
      <div className="flex justify-center space-x-20 max-sm:space-x-12 mb-4">
        <a
          href="https://github.com/doughminicano/shells.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 text-3xl"
        >
          <FaGithub className="hover:scale-150"/>
          <span className="mt-0 text-xs font-thin">CODE</span>
        </a>
        <a
          href="https://www.facebook.com/doughminicano/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-3xl"
        >
          <FaFacebook className="hover:scale-150"/>
        </a>
        <a
          href="https://www.instagram.com/doughminicano"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 text-3xl"
        >
          <FaInstagram className="hover:scale-150"/>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-garcia-14b217210/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700  text-3xl"
        >
          <FaLinkedin className="hover:scale-150"/>
        </a>
        {/* <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:hidden opacity-90 text-3xl"
        >
          <FaTwitter />
        </a> */}
      </div>

      {/* Divider */}
      <hr className="border-red-600 mb-4" />

      {/* Bottom Section: Contact Info */}
      <div className="text-center">
        <p className="text-black font-semibold text-lg">Shells Fuel Overiew</p>
        <p className="text-gray-700 text-sm">
          Contact me:{" "}
          <a
            href="mailto:support@shells.com"
            className="text-white hover:underline"
          >
            doughminicano@dtgtec.com
          </a>
        </p>
        <p className="text-gray-700 text-xs mt-2">
          &copy; {new Date().getFullYear()} Doughminicano. All rights reserved.
        </p>
      </div>
    </div>
  );
}
