import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = () => {
  const { token } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default Private;
