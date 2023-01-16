import axios from "axios";


const axiosClient = axios.create({baseURL: process.env.REACT_APP_API_URL});

const axiosAuthClient = axios.create({baseURL: process.env.REACT_APP_API_URL});

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
};

axiosAuthClient.interceptors.request.use(authInterceptor);

export {axiosClient, axiosAuthClient};