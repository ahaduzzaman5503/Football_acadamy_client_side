import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import AuthProvider from './componants/AuthProvider/AuthProvider.jsx';
import NotFound from './componants/NotFoundPage/NotFoundPage.jsx';
import Login from './componants/Login/Login.jsx';
import Register from './componants/Register/Register.jsx';
import Home from './componants/Home/Home.jsx';
import PopularInstructors from './componants/HomePages/PopularInstructors.jsx';
import ExtraSection from './componants/HomePages/ExtraSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/", element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/instractor'),
        loader: () => fetch('http://localhost:5000/extrasection')
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
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
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

