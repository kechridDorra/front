import React from 'react';
import axios from 'axios';
// ==================================
let Api = () => {
  const api = axios.create({
    baseURL: `https://127.0.0.1:8000/`,
  });
  api.interceptors.request.use((request) => { 
    return request;
  });
  api.interceptors.request.use(
    async (config) => {
      const token = await localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = 'Bearer  ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      // console.log("Response Interceptor", response);
      return response;
    },
    (error) => {
      console.log('Error Interceptor');
    

      return Promise.reject(error);
    }
  );

  return api;
};
// ==============================

export default Api();