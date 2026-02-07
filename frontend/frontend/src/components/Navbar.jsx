import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const closeMenu = () => setOpen(false);

  const navLinks = (
    <>
      <li><Link onClick={closeMenu} to="/" className="hover:text-violet-600">Home</Link></li>
      <li><Link onClick={closeMenu} to="/services" className="hover:text-violet-600">Services</Link></li>
      <li><Link onClick={closeMenu} to="/about" className="hover:text-violet-600">About</Link></li>
      <li><Link onClick={closeMenu} to="/contact" className="hover:text-violet-600">Contact</Link></li>

      {
        isLoggedIn ? (
          <li><Link onClick={closeMenu} to="/logout" className="hover:text-violet-600">Logout</Link></li>
        ) : (
          <>
            <li><Link onClick={closeMenu} to="/register" className="hover:text-violet-600">Register</Link></li>
            <li><Link onClick={closeMenu} to="/login" className="hover:text-violet-600">Login</Link></li>
          </>
        )
      }
    </>
  );

  return (
    <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 bg-white shadow">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-violet-600">
        mernStack2026
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 font-medium">
        {navLinks}
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block border px-8 py-2 rounded-full hover:bg-gray-50">
        Get started
      </button>

      {/* Mobile Button */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path d="M3 7h24M3 15h24M3 23h24" stroke="black" strokeWidth="2" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 p-6 text-lg">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
}
