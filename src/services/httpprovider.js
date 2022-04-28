import axios from 'axios';
const cors = require ('cors');
const axiosInterceptor = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`
})

axiosInterceptor.interceptors.request.use((config)=>{
    const cors = require ('cors');
    config.use(cors());
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTA1NDI2NTAsImV4cCI6MTY1MDU0NjI1MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoia2VjaHJpZC5kb3JyYTEzQGdtYWlsLmNvbSJ9.Pv-TQN7db_SrAhXWz7vtYUPKZS8Vlbljx334Gx9y-9xMYJqcsRKM0YXEoUwBun-VWbrTNNmW-4uk4q_3FeoPKEIOIBj-ckAaTOXc58CbGmcqfGCxn2UJwz12wtiYufKaT5KKGG22PMKfUnG-WoeoVYlXMmHzVjDUyB35R6fJm_ueUKxODUOB6Vpjm9jQxy2vxviG3kyAyzNPe2Db-dxfmHmPAzDel6R1fNQ1BWFI_iQkVrbvwphkqbreL8YBvkJ34iggSxBNm_6H_x0Uul4rbKHAaZd7F9fB3int3qHtZvpShyGWvtjlbu2jpzkFVJsQcqkAVWN1TZYETq61fXiUKQ';
    //localStorage.get('token'); //
    config.headers.Authorization = 'Bearer '+token;
    return config;
})

const post = async (url, data) =>{

    return await axiosInterceptor.post(url, data);

}

const get = async (url, params) =>{
    console.log(url);
    return await axiosInterceptor.get(url, params);
}


export {post, get}