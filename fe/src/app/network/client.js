import axios from "axios";

const client = axios.create({
    // in real world example we put this in env file
    baseURL: 'http://localhost/',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

client.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(error)
    }
)

export default client;

