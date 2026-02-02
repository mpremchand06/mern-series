

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-sm text-white w-full">

      {/* Navbar */}
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow">

        {/* Logo */}
        <a href="/" className="text-xl font-bold text-violet-600">
          mernStack2026
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-28 font-medium">
          <Link to="/"><a className="hover:text-violet-600">Home</a></Link>
          <Link to="/services"><a className="hover:text-violet-600">Services</a></Link>
          <Link to="/about"><a className="hover:text-violet-600">About</a></Link>
          <Link to="/register"><a className="hover:text-violet-600">Register</a></Link>
          <Link to="/contact"><a className="hover:text-violet-600">Contact</a></Link>
          <Link to="/login"><a className="hover:text-violet-600">Login</a></Link>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:inline bg-white hover:bg-gray-50 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition">
          Get started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden active:scale-90 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M3 7h24M3 15h24M3 23h24" stroke="black" strokeWidth="2" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg text-gray-800">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>

            <button className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
              Get started
            </button>
          </div>
        )}

      </nav>
    </div>
  );
}
