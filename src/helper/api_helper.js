import axios from "axios";

let base_url = "http://localhost:8080";

let token = localStorage.getItem("token");

// axios
const axiosInstance = axios.create({
    baseURL: base_url,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(function (config) {
    if (token) {
        let token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;

// auth
export const registerUser = (formData) =>
    axiosInstance.post(`/api/auth/register`, formData);

export const loginUser = (formData) =>
    axiosInstance.post(`/api/auth/login`, formData);

// dashboard
export const getOneUserData = () => {
    return axiosInstance.get(`/api/dashboard/get_one_user`);
};
