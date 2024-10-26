import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from './axios';
import { useAuthStore } from '@/lib/auth/auth.store';
import { setToken, setRefreshToken } from '@/utils/token';
import type { LoginCredentials, SignupCredentials, AuthResponse, User } from '@/types/auth';
import { API_ENDPOINTS } from '@/utils/constants';

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: async (credentials) => {
      const { data } = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
      return data;
    },
    onSuccess: (data) => {
      setToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setUser(data.user);
    },
  });
};

export const useSignup = () => {
  return useMutation<AuthResponse, Error, SignupCredentials>({
    mutationFn: async (credentials) => {
      const { data } = await axiosInstance.post(API_ENDPOINTS.AUTH.SIGNUP, credentials);
      return data;
    },
  });
};

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async () => {
      await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    },
    onSuccess: () => {
      logout();
    },
  });
};

export const useUpdateProfile = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation<User, Error, Partial<User>>({
    mutationFn: async (updateData) => {
      const { data } = await axiosInstance.patch(API_ENDPOINTS.USER.UPDATE, updateData);
      return data;
    },
    onSuccess: (updatedUser) => {
      setUser(updatedUser);
    },
  });
};
