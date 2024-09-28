// src/components/Navbar.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userSlice'; // Update the import to use the correct action
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAdmin = currentUser && currentUser.isAdmin; // Assuming isAdmin is a property on currentUser

  const handleLogout = () => {
    dispatch(logout()); // Call the correct logout action
  };

  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white shadow-lg">
      <Link to="/" className="text-2xl font-bold hover:text-blue-300">YourApp</Link>

      <div className="flex items-center space-x-6">
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/blogs" className="hover:text-blue-300">Blogs</Link>
        <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
        <Link to="/schools" className="hover:text-blue-300">Schools</Link>
        {isAdmin && (
          <Link to="/admin" className="hover:text-blue-300">Admin</Link>
        )}
        <Link to="/testimonials" className="hover:text-blue-300">Testimonials</Link>
        <Link to="/chat" className="hover:text-blue-300">Chat</Link>
        <Link to="/profile" className="hover:text-blue-300">Profile</Link>

        {/* Show login/logout based on user state */}
        {currentUser ? (
          <div className="flex items-center space-x-4">
            <span className="font-medium">{currentUser.name}</span> {/* Display user name */}
            <button 
              onClick={handleLogout} 
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="hover:text-blue-300">Login</Link>
            <Link to="/signup" className="hover:text-blue-300">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
