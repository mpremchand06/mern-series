import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <div className="text-sm w-full">

      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 bg-white text-gray-900 shadow">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-violet-600">
          mernStack2026
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-28 font-medium">

          <Link to="/" className="hover:text-violet-600">Home</Link>
          <Link to="/services" className="hover:text-violet-600">Services</Link>
          <Link to="/about" className="hover:text-violet-600">About</Link>
          <Link to="/contact" className="hover:text-violet-600">Contact</Link>

          {isLoggedIn ? (
            <Link to="/logout" className="hover:text-violet-600">Logout</Link>
          ) : (
            <>
              <Link to="/register" className="hover:text-violet-600">Register</Link>
              <Link to="/login" className="hover:text-violet-600">Login</Link>
            </>
          )}

        </ul>

        {/* Desktop Button */}
        <button className="hidden md:inline bg-white hover:bg-gray-50 border border-gray-300 px-9 py-2 rounded-full">
          Get started
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path d="M3 7h24M3 15h24M3 23h24" stroke="black" strokeWidth="2" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>

              {isLoggedIn ? (
                <Link to="/logout">Logout</Link>
              ) : (
                <>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </ul>
          </div>
        )}

      </nav>
    </div>
  );
}
