import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex flex-col justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
