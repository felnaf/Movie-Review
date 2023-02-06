import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useSelector((state) => state.postReducer);
  return userLoggedIn ? <Outlet /> : navigate('/');
};

export default PrivateRoute;
