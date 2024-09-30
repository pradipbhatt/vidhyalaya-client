import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userSlice"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the user data from the Redux store
  const { currentUser, isLoading, error } = useSelector((state) => state.user);

  // Logout handler
  const handleLogout = () => {
    // Dispatch the logout action to clear Redux state
    dispatch(logout());

    // Clear any user-related data from local storage
    localStorage.removeItem("currentUser");

    // Redirect to the login page after logout
    navigate("/login");
  };

  // If the data is loading
  if (isLoading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  // If there's an error
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  // If no user is found
  if (!currentUser) {
    return <div className="text-center">No user found</div>;
  }

  // Framer Motion animation variants for smooth transitions
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-indigo-200 p-6">
      <motion.h1
        className="text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        User Profile
      </motion.h1>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Profile Image */}
        <motion.img
          src={currentUser.userImage}
          alt={`${currentUser.fullname}'s profile`}
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-300 shadow-md"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        {/* User Details */}
        <motion.h2
          className="text-xl font-semibold text-gray-800 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {currentUser.fullname}
        </motion.h2>
        <motion.p
          className="text-gray-700 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Email: {currentUser.email}
        </motion.p>
        <motion.p
          className="text-gray-700 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Registration Number: {currentUser.registrationNumber}
        </motion.p>
        <motion.p
          className="text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Admin Status: {currentUser.isAdmin ? "Admin" : "User"}
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 space-y-4">
          <motion.button
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Edit Profile
          </motion.button>

          {/* Log Out button with the updated logout logic */}
          <motion.button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-pink-500 hover:to-red-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Log Out
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
