import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
