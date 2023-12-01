<<<<<<< HEAD
import axios from 'axios';

// Set up Axios instance
const baseURL = 'http://localhost:3000';
const instance = axios.create({ baseURL });

// Add interceptor to automatically add authorization header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

=======
import axios from 'axios';

// Set up Axios instance
const baseURL = 'http://localhost:3000';
const instance = axios.create({ baseURL });

// Add interceptor to automatically add authorization header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

>>>>>>> ebb58e66a60be14d34149f9c0b9c9c42dee52ad8
export { instance  };