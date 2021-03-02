/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const API_URL = '/users';
const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem('accessToken');
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
  );

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => (response), async (error) => {
  const originalRequest = error.config;
  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = localStorage.getItem('refreshToken');
    const token = await axios.get(`${API_URL}refresh`, {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
            'Content-Type': 'application/json',
          },
    });
    localStorage.setItem(
      'accessToken',
      JSON.stringify(token.data.accessToken),
    );
    localStorage.setItem(
      'refreshToken',
      JSON.stringify(token.data.refreshToken),
    );
    return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});
export default axiosApiInstance;
