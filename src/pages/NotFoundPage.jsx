import React from "react";
import Base from "../components/main/Base";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Base>
      <div className="min-h-screen flex flex-col items-center justify-center 
        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
        text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <NavLink to="/" className="px-4 py-2 transition-color duration-200 
        bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200">
        Go Home
      </NavLink>
    </div>
    </Base>
  );
};

export default NotFoundPage;
