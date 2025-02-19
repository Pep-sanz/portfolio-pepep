import axios from 'axios';

const fetcher = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// fethcer.interceptors.request.use(
//   (config) => {
//     const token =
//       typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// Interceptor untuk response (Opsional: menangani error global)
// fethcer.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       console.error('Error Response:', error.response.data);
//     } else {
//       console.error('Network Error:', error.message);
//     }
//     return Promise.reject(error);
//   },
// );

export default fetcher;
