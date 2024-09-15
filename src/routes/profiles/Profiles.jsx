import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-teal-200 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        {user ? (
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              User Profile
            </h1>
            <div className="flex flex-col items-center mb-8">
              {user.avatar && (
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full border-4 border-indigo-300 object-cover mb-6"
                />
              )}
              <p className="text-2xl font-semibold text-gray-800 mb-3">
                Name: {user.name}
              </p>
              <p className="text-xl text-gray-700">Email: {user.email}</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-2xl text-gray-700">
            User not authorized
          </p>
        )}
      </div>

      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
