import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";

const Navber = () => {
  const { users, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    console.log("logout");
    logOut();
  };

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           <li>
          <Link to="/">Home</Link>
          </li>
          <li>
              <Link  to="/instractors"
                 >
                Instructors
              </Link>
          </li>
          <li>
          <Link to="/classes" >Classes</Link>
          </li>
          <li>
          <Link  to="/dashboard" >Dashboard</Link>
          </li>
          </ul>
        </div>
        <Link  to="/" className="btn btn-ghost normal-case text-xl"> Football Academy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
              <Link  to="/instractors"
                 >
                Instructors
              </Link>
          </li>
          <li>
          <Link to="/classes" >Classes</Link>
          </li>
          <li>
          <Link  to="/dashboard" >Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
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
  );
};

export default Navber;
