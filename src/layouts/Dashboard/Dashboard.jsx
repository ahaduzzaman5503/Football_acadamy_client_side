import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdAssignmentAdd,
  MdCollectionsBookmark,
  MdManageAccounts,
  MdManageHistory,
  MdOutlineClass,
  MdPayment,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import useAdmin from "../../componants/Hooks/useAdmin";
import { AuthContext } from "../../componants/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { users } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  return (
    <div className="container mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-20 bg-gray-700 ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content ">
            <div className="flex justify-center items-center bg-slate-800 rounded-3xl my-2">
              <div class="w-3/4 max-w-sm rounded-lg shadow">
                <div class="flex justify-end px-2 pt-2"></div>
                <div class="flex flex-col items-center pb-5">
                  <img
                    class="w-14 h-14 mb-3 rounded-full shadow-lg"
                    src={users?.photoURL}
                    alt="Bonnie image"
                  />
                  <h5 class="mb-1 text-md font-medium text-gray-900 dark:text-white">
                    {users?.displayName}
                  </h5>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {users?.email}
                  </span>
                </div>
              </div>
            </div>
            {isAdmin ? (
              <>
                <div className="flex justify-center">
                  <GrUserAdmin size={35} color="white"></GrUserAdmin>
                </div>
                <h1 className="font-bold flex justify-center text-xl py-4">
                  Admin Dashboard
                </h1>
                <li>
                  <Link to="/dashboard/manageclasses" className="shadow-xl">
                    <MdManageAccounts size={25}></MdManageAccounts> Manage
                    Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageusers" className="shadow-xl">
                    <FiUsers size={25}></FiUsers> Manage Users
                  </Link>
                </li>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <BsFillPeopleFill size={35} color="green"></BsFillPeopleFill>
                </div>
                <h1 className="font-bold flex justify-center text-xl py-4">
                  Student DashBoard
                </h1>
                {/* Sidebar content here */}
                <li>
                  <Link to="/dashboard/selectedclases" className="shadow-xl">
                    <MdOutlineClass size={25}></MdOutlineClass>My Sellected
                    Class{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enroledclases" className="shadow-xl">
                    <MdCollectionsBookmark size={25}></MdCollectionsBookmark> My
                    Enrolled Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/paymenthistory" className="shadow-xl">
                    <MdManageHistory size={25}></MdManageHistory> Payment
                    history
                  </Link>
                </li>
                <div className="divider"></div>
                <div className="flex justify-center">
                  <FaChalkboardTeacher
                    size={35}
                    color="green"
                  ></FaChalkboardTeacher>
                </div>

                <h1 className="font-bold flex justify-center text-xl py-4">
                  Instructor Dashboard
                </h1>

                <li>
                  <Link to="/dashboard/addclass" className="shadow-xl">
                    <MdAssignmentAdd size={25}></MdAssignmentAdd> Add Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclass" className="shadow-xl">
                    <GiTeacher size={25}></GiTeacher> My Class
                  </Link>
                </li>

                <div className="divider"></div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
