// ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    // If not logged in, redirect to the login page
    return <Navigate to="/authentication" />;
  }

  if (adminOnly && !currentUser.isAdmin) {
    // If the route is admin only and the user is not an admin, redirect to home
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
