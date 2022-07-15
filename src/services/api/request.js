import axios from "axios";



const axiosInstance = axios.create({
    baseURL: 'http://83.220.174.182:8008/api'
})

axiosInstance.interceptors.response.use(res => res, error => {
    return Promise.reject(error)
})

export {axiosInstance as request}