import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAdmin = currentUser && currentUser.isAdmin;

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg fixed w-full z-10">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300">
          Vidhyalaya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {['/', '/about', '/blogs', '/contact', '/profile', '/compare'].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="text-white hover:text-gray-200 transition duration-300 relative group"
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
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

        {/* User Profile Actions */}
        <div className="relative">
          {currentUser ? (
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-white focus:outline-none"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                {/* Display Circular User Image */}
                <img
                  src={currentUser?.userImage || '/default-user.png'} // default image if userImage not available
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium hidden md:block">{currentUser.name}</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-4 px-6 z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* User Details */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentUser?.userImage || '/default-user.png'}
                      alt="User"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{currentUser.name}</p>
                      <p className="text-sm text-gray-500">{currentUser.email}</p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/* Profile and Logout Buttons */}
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition duration-300"
                  >
                    Logout
                  </button>
                </motion.div>
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
        <motion.div
          className="md:hidden flex flex-col mt-4 space-y-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          {['/', '/about', '/blogs', '/contact', '/schools'].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="text-white hover:text-gray-200 transition duration-300 relative group"
              onClick={() => setMobileMenuOpen(false)}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
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
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
