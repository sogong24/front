import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    withCredentials: true
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('API Request:', {
            url: config.url,
            method: config.method,
            headers: config.headers,
            baseURL: config.baseURL
        });
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', {
            status: error.response?.status,
            data: error.response?.data,
            config: error.config
        });
        return Promise.reject(error);
    }
);

export default api;