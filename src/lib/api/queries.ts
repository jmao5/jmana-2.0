import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axios';

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const { data } = await axiosInstance.get('/user/profile');
      return data;
    },
  });
};

