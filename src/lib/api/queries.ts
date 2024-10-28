import { useQuery } from '@tanstack/react-query'
import { axiosInstanceClient } from './axiosInstanceClient'

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const { data } = await axiosInstanceClient.get('/user/profile')
      return data
    },
  })
}
