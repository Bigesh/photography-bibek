import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const userToken = localStorage.getItem('userToken');

  return (
    <Route
      {...rest}
      element={userToken ? element : <Navigate to="/signin" />}
    />
  );
};

export default PrivateRoute;
