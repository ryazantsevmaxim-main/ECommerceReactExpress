import {axiosAuthClient, axiosClient} from "./axios";
import jwt_decode from "jwt-decode";


export const signinRequest = async (email, password) => {
    const response = await axiosClient.post('api/user/signin', {email, password, role: 'ADMIN'});
    const {token} = response.data;

    localStorage.setItem('token', token);

    return jwt_decode(token);
};

export const loginRequest = async (email, password) => {
    const response = await axiosClient.post('api/user/login', {email, password});
    const {token} = response.data;

    localStorage.setItem('token', token);

    return jwt_decode(token);
};

export const checkAuthRequest = async () => {
    const response = await axiosAuthClient.get('api/user/check-auth');
    const {token} = response.data;

    localStorage.setItem('token', token);

    return jwt_decode(token);
};