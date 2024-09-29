import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/reducers/userSlice';
import { FiUser } from 'react-icons/fi';

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchUserData());
    }
  }, [dispatch, currentUser]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-gray-100">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
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
    <div className="flex justify-center items-center h-screen w-full bg-gray-100 text-gray-900">
      {currentUser ? (
        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          {/* User Icon */}
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex justify-center items-center text-4xl text-white bg-primary-500">
            <FiUser />
          </div>

          {/* User Details */}
          <div className="mt-4">
            <p className="text-xl font-bold">{currentUser.name}</p>
            <p className="text-gray-600">{currentUser.email}</p>

            {/* Additional Fields */}
            {currentUser.phone && (
              <p className="text-gray-600 mt-2">Phone: {currentUser.phone}</p>
            )}
            {currentUser.address && (
              <p className="text-gray-600 mt-2">Address: {currentUser.address}</p>
            )}
            {currentUser.role && (
              <p className="text-gray-600 mt-2">Role: {currentUser.role}</p>
            )}
            {currentUser.dateJoined && (
              <p className="text-gray-600 mt-2">Joined: {new Date(currentUser.dateJoined).toLocaleDateString()}</p>
            )}
          </div>

          {/* Add more fields as necessary */}
        </div>
      ) : (
        <p className="text-lg">No user data available</p>
      )}
    </div>
  );
};

export default Profile;
