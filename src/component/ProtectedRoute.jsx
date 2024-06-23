import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../global/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
