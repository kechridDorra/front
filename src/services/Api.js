import React from 'react';
import axios from 'axios';
export const baseURL=`https://127.0.0.1:8000`
// ==================================
let Api = () => {
  const api = axios.create({
    baseURL: `https://127.0.0.1:8000`,
  });
  api.interceptors.request.use((request) => { 
    return request;
  });

  axios.interceptors.request.use
        (async (config) =>
    { const token = await Api.localStorage.getItem('token').session.token; 
    if (token) {
      config.headers.Authorization = 'Bearer  ' + token;
      }; return config; });

/*  Source: https://prograide.com/pregunta/42959/Attacher-len-tete-dautorisation-pour-toutes-les-demandes-axios
  /*api.interceptors.request.use(
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
  );*/
  /*api.interceptors.request.use(
    async (config) => {
      const {token,login} = await JSON.parse(localStorage.getItem('user-info'));
      console.log('token',token,login)
      if (token) {
        config.headers.Authorization = 'Bearer  ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );*/
 

  Source: https://prograide.com/pregunta/42959/Attacher-len-tete-dautorisation-pour-toutes-les-demandes-axios
  api.interceptors.response.use(
    (response) => {
       console.log("Response Interceptor", response);
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
/*
export async function getUserById(id) {
 let resultat;
  await axios.get(baseURL+'api/user/'+id).then((res)=>{
    console.log(res)
   resultat=res.data
 })

}*/