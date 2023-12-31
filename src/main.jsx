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
import MyClass from './componants/InstructorDashboard/MyClass';
import AddClass from './componants/InstructorDashboard/AddClass';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Classes from './componants/HomePages/Classes';
import AdminRoute from './componants/PrivateRoute/AdminRoute';
const queryClient = new QueryClient()


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
      },
      {
        path: "/instractor", 
        element: <PopularInstructors></PopularInstructors>,
      },
      {
        path: "/extrasection", 
        element: <ExtraSection></ExtraSection>,
      },
      {
        path: "/instractors", element: <InstructorsPage></InstructorsPage>,
        loader: () => fetch('https://football-acadamy-server.vercel.app/instractor')
      },
      {
        path: "/classes", element: <Classes></Classes>,
        loader: () => fetch('https://football-acadamy-server.vercel.app/footballclass')
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
    path:"/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:"/dashboard/selectedclases", 
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path:"/dashboard/enroledclases", 
        element:  <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path:"/dashboard/payment/:id", 
        element: <PaymentStudent></PaymentStudent>
      },

      {
        path:"/dashboard/paymenthistory", 
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:"/dashboard/addclass", 
        element: <AddClass></AddClass>
      },
      {
        path:"/dashboard/myclass", 
        element: <MyClass></MyClass>,
        loader: () => fetch(`https://football-acadamy-server.vercel.app/addclassdata`)
      },
      {
        path:"/dashboard/manageclasses", 
        element: <ManageClasses></ManageClasses>
      },
      {
        path:"/dashboard/manageusers", 
        element:  <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);

