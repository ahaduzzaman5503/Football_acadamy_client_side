import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './layouts/Main.jsx';
import AuthProvider from './componants/AuthProvider/AuthProvider.jsx';
import NotFound from './componants/NotFoundPage/NotFoundPage.jsx';
import Login from './componants/Login/Login.jsx';
import Register from './componants/Register/Register.jsx';
import Home from './componants/Home/Home.jsx';
import PopularInstructors from './componants/HomePages/PopularInstructors.jsx';
import ExtraSection from './componants/HomePages/ExtraSection.jsx';
import PopularClasses from './componants/HomePages/PopularClasses.jsx';
import InstructorsPage from './componants/InstructorsPage/InstructorsPage.jsx';
import Dashboard from './layouts/Dashboard/Dashboard.jsx';
import MySelectedClasses from './componants/StudentDashboard/MySelectedClasses.jsx';
import MyEnrolledClasses from './componants/StudentDashboard/MyEnrolledClasses.jsx';
import PaymentStudent from './componants/StudentDashboard/PaymentStudent';
import PaymentHistory from './componants/StudentDashboard/PaymentHistory';
import ManageClasses from './componants/AdminDashboard/ManageClasses';
import ManageUsers from './componants/AdminDashboard/ManageUsers';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/", element: <Home></Home>
      },
      {
        path: "/footballclass", 
        element: <PopularClasses></PopularClasses>,
        // loader: () => fetch('http://localhost:5000/footballclass')
      },
      {
        path: "/instractor", 
        element: <PopularInstructors></PopularInstructors>,
        // loader: () => fetch('http://localhost:5000/instractor'),
      },
      {
        path: "/extrasection", 
        element: <ExtraSection></ExtraSection>,
        // loader: () => fetch('http://localhost:5000/extrasection'),
      },
      {
        path: "/instractors", element: <InstructorsPage></InstructorsPage>,
        loader: () => fetch('http://localhost:5000/instractor')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path:"/dashboard", element: <Dashboard></Dashboard>,
    children: [
      {
        path:"/dashboard/selectedclases", 
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path:"/dashboard/enroledclases", 
        element:  <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path:"/dashboard/payment", 
        element: <PaymentStudent></PaymentStudent>
      },
      {
        path:"/dashboard/paymenthistory", 
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:"/dashboard/manageclasses", 
        element: <ManageClasses></ManageClasses>
      },
      {
        path:"/dashboard/manageusers", 
        element:  <ManageUsers></ManageUsers>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

