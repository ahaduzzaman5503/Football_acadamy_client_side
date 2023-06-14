
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading, isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token') && !loading, 
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/$(user?.email)`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;