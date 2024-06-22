import React, { useState, useEffect } from 'react';
import { MenuRounded, ClearRounded } from '@mui/icons-material';
import { Avatar, Menu, MenuItem, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, fetchUserData } from '../redux/reducers/userSlice';
import { Link } from 'react-router-dom';
import LogoImg from '../utils/Images/Logo1.png'; // Import your logo image

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md fixed w-full top-0 z-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Conditionally render logo and title for larger screens */}
            <div className="hidden lg:flex items-center">
              <Link to="/" className="flex items-center">
                <img className="h-8 w-auto mr-2" src={LogoImg} alt="Vidhyalaya Logo" />
                <span className="font-semibold text-xl text-gray-800">Vidhyalaya</span>
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <ClearRounded className="h-6 w-6" /> : <MenuRounded className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <NavLink to="/" text="Home" />
              <NavLink to="/about" text="About" />
              <NavLink to="/compare" text="Compare" />
              <NavLink to="/blogs" text="Blogs" />
              <NavLink to="/chat" text="Chat" />
              <NavLink to="/contact" text="Contact Us" />
            </div>
          </div>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {currentUser ? (
              <div className="ml-3 relative">
                <Avatar onClick={handleClick}>{currentUser.name.charAt(0)}</Avatar>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Box className="p-2">
                    <Typography variant="body1">{currentUser.name}</Typography>
                    <Typography variant="body2">{currentUser.email}</Typography>
                  </Box>
                  <MenuItem component={Link} to="/profile" onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className="ml-3 relative">
                <Link
                  to="/login"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLinkMobile to="/" text="Home" toggleMenu={toggleMenu} />
          <NavLinkMobile to="/about" text="About" toggleMenu={toggleMenu} />
          <NavLinkMobile to="/compare" text="Compare" toggleMenu={toggleMenu} />
          <NavLinkMobile to="/blogs" text="Blogs" toggleMenu={toggleMenu} />
          <NavLinkMobile to="/chat" text="Chat" toggleMenu={toggleMenu} />
          <NavLinkMobile to="/contact" text="Contact" toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="text-gray-900 hover:text-green-900 px-3 py-2 rounded-md text-base font-medium text-center sm:text-left"
    style={{ fontSize: '1.2rem', fontFamily: 'Times New Roman' }}
  >
    {text}
    <span className="underline"></span>
  </Link>
);

const NavLinkMobile = ({ to, text, toggleMenu }) => (
  <Link
    to={to}
    onClick={toggleMenu}
    className="text-gray-900 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium text-center"
    style={{ fontSize: '1.2rem', fontFamily: 'Times New Roman' }}
  >
    {text}
  </Link>
);

export default Navbar;
