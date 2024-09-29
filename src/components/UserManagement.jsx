import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    fullname: "pradip bhatt",
    email: "pradip10bhatt@gmail.com",
    registrationNumber: "BCT03377",
    password: "1111", // Added password field
    isAdmin: false,
    userImage: "HTTPS://pradipbhatt.com.np",
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Fetch users when component mounts
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/user/");
      setUsers(response.data); // Adjust based on your API response
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers(); // Call fetchUsers when component mounts
  }, []);

  // Validate user inputs
  const validateInputs = () => {
    if (!userData.fullname || !userData.email || !userData.registrationNumber || !userData.password) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    // Optionally: Add email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Handle user signup
  const handleSignUp = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      try {
        const res = await axios.post("http://localhost:8081/api/user/signup", {
          fullname: userData.fullname,
          email: userData.email,
          password: userData.password,
          registrationNumber: userData.registrationNumber,
          userImage: userData.userImage,
          isAdmin: userData.isAdmin,
        });
        toast.success("Account Created Successfully");
        console.log("Response:", res.data);
        fetchUsers(); // Refresh the user list after signing up
        // Clear form
        setUserData({ fullname: "", email: "", registrationNumber: "", password: "", isAdmin: false, userImage: "" });
      } catch (err) {
        toast.error(err.response?.data?.message || err.message);
        console.error("Error signing up:", err);
      } finally {
        setLoading(false);
        setButtonDisabled(false);
      }
    } else {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  // Handle user update
  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:8081/api/user/${currentUserId}`, userData);
      toast.success("User updated successfully");
      fetchUsers(); // Refresh the user list after updating
      setIsEditing(false); // Reset editing state
      setUserData({ fullname: "", email: "", registrationNumber: "", password: "", isAdmin: false, userImage: "" }); // Clear form
      setCurrentUserId(null); // Reset current user ID
    } catch (error) {
      toast.error("Error updating user");
      console.error("Error updating user:", error);
    }
  };

  // Handle user deletion with confirmation
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8081/api/user/${userId}`);
        setUsers(users.filter((user) => user._id !== userId)); // Update state to remove deleted user
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error("Error deleting user");
        console.error("Error deleting user:", error);
      }
    }
  };

  // Set user data for editing
  const startEditing = (user) => {
    setUserData({ 
      fullname: user.fullname, 
      email: user.email, 
      registrationNumber: user.registrationNumber, 
      password: "", // Clear password field when editing
      isAdmin: user.isAdmin, 
      userImage: user.userImage || "" // Pre-fill user image if exists
    }); 
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
          placeholder="Full Name"
          value={userData.fullname}
          onChange={(e) => setUserData({ ...userData, fullname: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Registration Number"
          value={userData.registrationNumber}
          onChange={(e) => setUserData({ ...userData, registrationNumber: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password" // Make the password input hidden
          placeholder="Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="User Image (URL)"
          value={userData.userImage}
          onChange={(e) => setUserData({ ...userData, userImage: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <label className="inline-flex items-center mb-2">
          <input
            type="checkbox"
            checked={userData.isAdmin}
            onChange={(e) => setUserData({ ...userData, isAdmin: e.target.checked })}
            className="mr-2"
          />
          Is Admin
        </label>
        {isEditing ? (
          <button onClick={handleUpdateUser} className="bg-blue-500 text-white p-2">
            Update User
          </button>
        ) : (
          <button onClick={handleSignUp} className="bg-green-500 text-white p-2" disabled={buttonDisabled}>
            {loading ? "Creating..." : "Create User"}
          </button>
        )}
      </div>

      <h2 className="text-xl mb-4">User List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Full Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Registration Number</th>
            <th className="border border-gray-300 p-2">Is Admin</th>
            <th className="border border-gray-300 p-2">User Image</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 p-2">{user.fullname}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.registrationNumber}</td>
              <td className="border border-gray-300 p-2">{user.isAdmin ? "Yes" : "No"}</td>
              <td className="border border-gray-300 p-2">{user.userImage || "N/A"}</td>
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

      <ToastContainer />
    </div>
  );
};

export default UserManagement;
