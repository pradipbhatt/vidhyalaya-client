// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);

  // If there's no currentUser, navigate to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Otherwise, return the children (the protected components)
  return children;
};

export default ProtectedRoute;
