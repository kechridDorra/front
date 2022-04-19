import axios from 'axios';

const axiosInterceptor = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`
})

axiosInterceptor.interceptors.request.use((config)=>{
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTAzNDIwNTcsImV4cCI6MTY1MDM0NTY1Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoia2VjaHJpZC5kb3JyYTEzQGdtYWlsLmNvbSJ9.fLMlsz_pncjvF8OLFk-VF6noJ8abbLWORA3dCriAjrfpSQ2Bnf8S4iO1brKv6c-y0WSk0QhreN3jZ36cUzcAK0xDU3f-EPWBDaYrNVhyWSUfaEXSrLR7KwdyOStKsubGTgyg_vNnfgq2p5IrnepjrCfz0ZWRCXI5Ubph6dX-z7bHJG0EtcR1mxzj-j4Cj5D3fvO5QrAqVMkqQuAmSlReyVrcoQoSwjYllIciTAKjcHPyeLWAu0Hjn-iVc6Fp8zK_PJygqUj9Iv6vo1tQgi_mzrYqCt0GiKtX4DvJSlSu-3D4PKW_9MtoM7NQ9V3MyN8EoISuPzYCHD079uO6V5ACUA';
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