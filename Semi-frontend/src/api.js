import axios from 'axios';

const apiserver = axios.create({
    baseURL: 'http://localhost:8000'
});

export default apiserver;