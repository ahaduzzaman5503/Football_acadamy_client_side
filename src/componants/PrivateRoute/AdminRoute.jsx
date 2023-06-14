import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {users, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className='flex items-center justify-center'>Loding...</div> 
    };

    if(users && isAdmin){
        return children;
    }
    return  <Navigate state={{from: location}} to="/login" replace ></Navigate> 
};

export default AdminRoute;