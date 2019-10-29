import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.3.249:3333',
});

export default api;