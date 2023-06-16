import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className='flex items-center justify-center'>Loding...</div> 
    };

    if(users){
        return children;
    }
    return  <Navigate state={{from: location}} to="/login" replace ></Navigate> 
};

export default PrivateRoute;