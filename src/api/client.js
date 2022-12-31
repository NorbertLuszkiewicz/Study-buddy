import axios from 'axios';
import { getToken, removeToken } from './token.js';

const token = localStorage.getItem('token');

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      removeToken();
    }
    if (error.response) {
      return Promise.reject(error.response);
    }
  }
);

client.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
});
