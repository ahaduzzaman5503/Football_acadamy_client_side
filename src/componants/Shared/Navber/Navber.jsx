import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";

const Navber = () => {
    const {users, logOut} = useContext(AuthContext)
    const handleLogout = () => {
      console.log("logout");
      logOut();
    };
    
  return (
    <div className="fixed w-full bg-white z-20 shadow-sm">
      <div className="py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <div className="btn btn-ghost normal-case text-black font-bold text-xl">
            <Link to="/"> Football Academy</Link>
          </div>
          {/* menu ber */}
          <div>
            <ul className="flex flex-row md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-blue-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Instructors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Classes
                </a>
              </li>
              {
                users ? <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </a>
              </li> : <></>
              }
            </ul>
          </div>

{/* "===========================" */}

          <div className="flex justify-between">
            <div>

              {users ? ( 
              <>
              <div className="flex items-center justify-center gap-2">
              <button
              onClick={handleLogout}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                SignOut
              </button>
              <div className="avatar">
                <div 
                title={users.displayName}
                className="w-11 rounded-full">
                  <img src={users.photoURL} />
                </div>
              </div>
            </div>
              </>) : (
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <Link to="/login">Login</Link>
              </button>
              ) }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
