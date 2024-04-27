import axios from "axios";
import {API_KEY} from "../utils/const/const.ts";

export const instance = axios.create({
    baseURL: API_KEY
});




instance.interceptors.request.use(
    async config => {
        // const key = getTokenFromLocalStorage()
        // config.headers['Authorization'] = `Bearer ${key}`
        config.headers['Accept'] = 'application/json'
        config.withCredentials = true

        return config
    },
    error => {
        Promise.reject(error)
    }

);