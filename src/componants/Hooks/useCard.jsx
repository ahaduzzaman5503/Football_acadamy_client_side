import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const useCard = () => {
    const {users, loading} = useContext(AuthContext) || {};

    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, isError, data: card = [], error, refetch } = useQuery({
        queryKey: ['cart', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectclass?email=${users?.email}`)
            return res.data;
        },
      })
      return [ card, isLoading, refetch ]

}
export default useCard;