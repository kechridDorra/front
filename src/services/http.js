import axios from "axios";

const httpClientInterceptor = axios.create({
    baseURL: `https://127.0.0.1:8000/api/`,
})

httpClientInterceptor.interceptors.request.use((config) => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'))
    const token = userInfo.token

    //console.log(token);
    config.headers.authorization = `Bearer ${token}`
    return config
})

export async function get(url, params) {
    try {
        const response = await httpClientInterceptor.get(`${url}`, params)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function post(url, data) {
    try {      
        const response = await httpClientInterceptor.post(url, data)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function patch(url, data) {
    try {
       
        const response = await httpClientInterceptor.patch(`${url}`, data)
  
        return response
    } catch (error) {
       console.error(error)
    }
}

export async function remove (url, data) {
    try {
        
        const response = await httpClientInterceptor.delete(`${url}`, data)
        return response
    } catch (error) {
        console.error(error)
    }
}
