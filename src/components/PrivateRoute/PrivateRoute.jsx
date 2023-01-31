import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/authSelectors';
import { Navigate, useLocation } from 'react-router-dom';

export default function PublicRoute({ redirectTo, children }) {
  const location = useLocation();
  const isAuth = useSelector(authSelectors.isAuth);

  return isAuth ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}
