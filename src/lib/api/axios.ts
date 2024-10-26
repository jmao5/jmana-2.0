import { getToken, removeTokens, setToken } from '@/utils/token';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axiosInstance.post('/auth/refresh', { refreshToken });
        const { accessToken } = response.data;
        setToken(accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        removeTokens();
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
