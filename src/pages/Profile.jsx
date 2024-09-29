import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/reducers/userSlice'; // Adjust the path as needed
import { FiUser, FiSettings } from 'react-icons/fi';
import { MdPrivacyTip, MdArticle } from 'react-icons/md';

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch user data when component mounts
    dispatch(fetchUserData());
  }, [dispatch]);

  // Check if the currentUser is available
  const user = currentUser && currentUser.length > 0 ? currentUser[0] : null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-100 to-blue-300 animate-gradient">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-100 to-blue-300 animate-gradient">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-100 to-blue-300 animate-gradient min-h-screen mt-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mt-10">
        <div className="flex items-center mb-4">
          {/* User Profile Image */}
          {user && user.userImage ? (
            <img
              src={user.userImage}
              alt="User"
              className="w-24 h-24 rounded-full border-4 border-gray-300"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex justify-center items-center text-4xl text-gray-500 bg-gray-200">
              <FiUser />
            </div>
          )}
          <div className="ml-4">
            <h3 className="text-xl font-semibold">{user?.fullname}</h3>
            <p className="text-sm text-gray-500">{user?.email}</p>
            {user?.registrationNumber && (
              <p className="text-xs text-gray-400">Reg: {user.registrationNumber}</p>
            )}
          </div>
        </div>
        {/* User Bio Section */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600">
            {user?.isAdmin ? 'Admin User' : 'Regular User'}
          </p>
          {user?.createdAt && (
            <p className="text-xs text-gray-400">
              Joined: {new Date(user.createdAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
      {/* Options Section */}
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Options</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center border-b py-2 hover:bg-gray-100 cursor-pointer">
            <FiSettings className="text-gray-500 mr-2" />
            <span className="text-md">Settings</span>
          </div>
          <div className="flex items-center border-b py-2 hover:bg-gray-100 cursor-pointer">
            <MdPrivacyTip className="text-gray-500 mr-2" />
            <span className="text-md">Privacy Policy</span>
          </div>
          <div className="flex items-center border-b py-2 hover:bg-gray-100 cursor-pointer">
            <MdArticle className="text-gray-500 mr-2" />
            <span className="text-md">Terms & Conditions</span>
          </div>
          {/* Add more options as necessary */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
