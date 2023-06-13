import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const useCard = () => {
    const {users} = useContext(AuthContext);

    const { isLoading, isError, data: card = [], error, refetch } = useQuery({
        queryKey: ['cart', users?.email],
        queryFn: async () => {
            const res = await fetch(`https://football-acadamy-server.vercel.app/selectclass?email=${users.email}`)
            return res.json();
        },
      })
      return [ card, isLoading, refetch  ]

}
export default useCard;