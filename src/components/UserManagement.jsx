import React, { useEffect, useState } from "react";
import {
  getUsers,
  UserSignUp,
  UserSignIn,
  updateUser,
  deleteUser,
} from "../api"; // Adjust import paths as necessary
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const navigate = useNavigate();

  // Fetch users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); // Adjust based on your API response
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle user signup
  const handleSignUp = async () => {
    try {
      await UserSignUp(userData);
      fetchUsers(); // Refresh the user list after signing up
      setUserData({ username: "", password: "", email: "" }); // Clear form
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // Handle user update
  const handleUpdateUser = async () => {
    try {
      await updateUser(currentUserId, userData);
      fetchUsers(); // Refresh the user list after updating
      setIsEditing(false); // Reset editing state
      setUserData({ username: "", password: "", email: "" }); // Clear form
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user._id !== userId)); // Update state to remove deleted user
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Set user data for editing
  const startEditing = (user) => {
    setUserData({ username: user.username, email: user.email }); // Pre-fill the form with user data
    setIsEditing(true);
    setCurrentUserId(user._id); // Store the current user's ID for updates
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">User Management</h1>

      <div className="mb-6">
        <h2 className="text-xl">{isEditing ? "Edit User" : "Create User"}</h2>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        {isEditing ? (
          <button onClick={handleUpdateUser} className="bg-blue-500 text-white p-2">
            Update User
          </button>
        ) : (
          <button onClick={handleSignUp} className="bg-green-500 text-white p-2">
            Create User
          </button>
        )}
      </div>

      <h2 className="text-xl mb-4">User List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Username</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 p-2">{user.username}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => startEditing(user)}
                  className="bg-yellow-500 text-white p-1 mr-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="bg-red-500 text-white p-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
