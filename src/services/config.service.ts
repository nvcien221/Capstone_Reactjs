import axios from "axios";
import { ACCESS_TOKEN } from "src/constants";
import { getLocalStorage } from "src/utils";

const BASE_URL = 'https://shop.cyberlearn.vn/api'

export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000
})


export const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000,
})

axiosWithAuth.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;
    return config;
}, (e) => {
    return Promise.reject(e);
});