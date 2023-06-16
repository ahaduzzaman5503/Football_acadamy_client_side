import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAdmin = () => {
    const auth = useContext(AuthContext);
    const {users: user, loading} = auth;
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token') && !loading, 
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;