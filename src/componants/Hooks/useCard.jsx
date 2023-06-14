import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCard = () => {
    const {user} = useAuth()
    const {users, loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, isError, data: card = [], error, refetch } = useQuery({
        queryKey: ['cart', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectclass?email=${users.email}`)
            console.log('res from axios', res);
            return res.data;
        },
      })
      return [ card, isLoading, refetch  ]

}
export default useCard;