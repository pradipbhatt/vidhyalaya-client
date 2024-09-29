import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userSlice'; // Update the import to use the correct action
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAdmin = currentUser && currentUser.isAdmin;

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300">
          Vidhyalaya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/blogs"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
          >
            Blogs
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
          >
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/schools"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
          >
            Schools
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/chat"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
          >
            Chat
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/compare"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
          >
            Compare
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>


          {isAdmin && (
            <Link
              to="/admin"
              className="text-white hover:text-gray-200 transition duration-300 relative group"
            >
              Admin
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </div>

        {/* User Actions */}
        <div className="relative">
          {currentUser ? (
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-white focus:outline-none"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span className="font-medium">{currentUser.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-gray-200 transition duration-300 relative group"
              >
                Login
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-gray-200 transition duration-300 relative group"
              >
                Sign Up
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white hover:text-gray-200"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/blogs"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/schools"
            className="text-white hover:text-gray-200 transition duration-300 relative group"
            onClick={() => setMobileMenuOpen(false)}
          >
            Schools
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {isAdmin && (
            <Link
              to="/admin"
              className="text-white hover:text-gray-200 transition duration-300 relative group"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
          {/* User Actions in Mobile Menu */}
          {currentUser ? (
            <>
              <Link
                to="/profile"
                className="text-white hover:text-gray-200 transition duration-300 relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="text-red-600 hover:text-gray-200 transition duration-300 relative group"
              >
                Logout
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-200 transition duration-300 relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-gray-200 transition duration-300 relative group"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
