import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdAssignmentAdd, MdCollectionsBookmark, MdManageAccounts, MdManageHistory, MdOutlineClass, MdPayment } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';


const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
          <h1 className="font-bold flex justify-center text-xl py-4">Student DashBoard</h1>
            {/* Sidebar content here */}
            <li>
              <Link to='/dashboard/selectedclases' className="shadow-xl"> 
              <MdOutlineClass size={25}></MdOutlineClass>My Sellected Class </Link>
            </li>
            <li>
              <Link to='/dashboard/enroledclases' className="shadow-xl"> 
              <MdCollectionsBookmark size={25}></MdCollectionsBookmark> My Enrolled Class</Link>
            </li>
            <li>
              <Link to='/dashboard/payment' className="shadow-xl"> 
              <MdPayment size={25}></MdPayment> Student Payment</Link>
            </li>
            <li>
              <Link to='/dashboard/paymenthistory' className="shadow-xl"> 
              <MdManageHistory size={25}></MdManageHistory> Payment history</Link>
            </li>
          <div className="divider"></div> 

          <h1 className="font-bold flex justify-center text-xl py-4">Instructor Dashboard</h1>
          <li>
              <Link to='/dashboard/addclass' className="shadow-xl"> 
              <MdAssignmentAdd size={25}></MdAssignmentAdd> Add Class</Link>
            </li>
          <li>
              <Link to='/dashboard/myclass' className="shadow-xl"> 
              <GiTeacher size={25}></GiTeacher> My Class</Link>
            </li>

          <div className="divider"></div> 

          <h1 className="font-bold flex justify-center text-xl py-4">Admin Dashboard</h1>
          <li>
              <Link to='/dashboard/manageclasses' className="shadow-xl"> 
              <MdManageAccounts size={25}></MdManageAccounts> Manage Classes</Link>
            </li>
          <li>
              <Link to='/dashboard/manageusers' className="shadow-xl"> 
              <FiUsers size={25}></FiUsers> Manage Users</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
