import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto flex items-center justify-center py-20">
      <div>
        <div>
          <h1 className="font-bold text-4xl  flex justify-center mt-2 text-red-700 pb-10">Page Not Found</h1>
          <img className="border-2 rounded-3xl" src="https://i.ibb.co/bNDZbBH/football-academy.png" />
        </div>
        <div className="flex justify-center mt-2">
          <Link to="/"> 
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Back to Home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
