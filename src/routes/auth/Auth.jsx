import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {!(
          location.pathname === "/auth/signup" ||
          location.pathname === "/auth/login"
        ) && (
          <div className="flex justify-between mb-6">
            <Link to="/auth/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
