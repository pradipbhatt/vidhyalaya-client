import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, logout } from '../redux/reducers/userSlice';
import { FiUser, FiEdit, FiLogOut, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch user data if not available
    if (!currentUser) {
      dispatch(fetchUserData());
    }
  }, [dispatch, currentUser]);

  // Check if user data is in local storage
  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const parsedUser = JSON.parse(storedUserData).currentUser;
      if (parsedUser) {
        // Here you might want to set the user directly in Redux if needed
      }
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleDelete = () => {
    // Handle user deletion logic here
    // You may want to show a confirmation dialog before proceeding
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-gray-100">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-4 sm:p-6 lg:p-8">
      {currentUser ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center transform transition-transform duration-300 hover:scale-105">
          {/* User Icon */}
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex justify-center items-center text-4xl text-white bg-primary-500">
            {currentUser.userImage ? (
              <img src={currentUser.userImage} alt="User" className="w-full h-full rounded-full" />
            ) : (
              <FiUser />
            )}
          </div>

          {/* User Details */}
          <div className="mt-4">
            <p className="text-2xl font-bold">{currentUser.fullname || currentUser.name}</p>
            <p className="text-gray-600">{currentUser.email}</p>
            {currentUser.registrationNumber && (
              <p className="text-gray-600 mt-2">Registration Number: {currentUser.registrationNumber}</p>
            )}
            {currentUser.phone && (
              <p className="text-gray-600 mt-2">Phone: {currentUser.phone}</p>
            )}
            {currentUser.address && (
              <p className="text-gray-600 mt-2">Address: {currentUser.address}</p>
            )}
            {currentUser.isAdmin && (
              <p className="text-gray-600 mt-2">Role: Admin</p>
            )}
            {currentUser.dateJoined && (
              <p className="text-gray-600 mt-2">Joined: {new Date(currentUser.dateJoined).toLocaleDateString()}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-around mt-4">
            <Link to="/edit-profile">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <FiEdit className="mr-1" /> Edit Profile
              </button>
            </Link>
            <button 
              onClick={handleDelete} 
              className="flex items-center text-red-600 hover:text-red-800"
            >
              <FiTrash2 className="mr-1" /> Delete Profile
            </button>
          </div>

          {/* Logout Button */}
          <div className="mt-4">
            <button 
              onClick={handleLogout} 
              className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>

          {/* Privacy Policy and Terms & Conditions Links */}
          <div className="mt-6">
            <Link to="/privacy-policy" className="text-gray-600 hover:underline">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms-conditions" className="text-gray-600 hover:underline">Terms & Conditions</Link>
          </div>
        </div>
      ) : (
        <p className="text-lg">No user data available</p>
      )}
    </div>
  );
};

export default Profile;
