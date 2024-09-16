import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-800 p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to="/" aria-label="Home">
            LOGO
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-yellow-300 hover:text-yellow-200 px-4 py-2 rounded-lg border-2 border-transparent hover:border-yellow-300 transition-colors duration-300"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-yellow-300 hover:text-yellow-200 px-4 py-2 rounded-lg border-2 border-transparent hover:border-yellow-300 transition-colors duration-300"
                aria-label="Profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/auth"
                className="text-yellow-300 hover:text-yellow-200 px-4 py-2 rounded-lg border-2 border-transparent hover:border-yellow-300 transition-colors duration-300"
                aria-label="Login or Sign Up"
              >
                Login/SignUp
              </Link>
            </li>
          </ul>
          
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        
        <div
          className={`md:hidden absolute top-16 right-0 bg-white text-gray-800 w-64 rounded-md shadow-lg transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="text-purple-700 hover:text-purple-600 block px-4 py-2 rounded-lg border-2 border-transparent hover:border-purple-700 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-purple-700 hover:text-purple-600 block px-4 py-2 rounded-lg border-2 border-transparent hover:border-purple-700 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/auth"
                className="text-purple-700 hover:text-purple-600 block px-4 py-2 rounded-lg border-2 border-transparent hover:border-purple-700 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Login or Sign Up"
              >
                Login/SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
