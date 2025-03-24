import axios from 'axios';

const apiserver = axios.create({
    baseURL: 'https://cropxpert-server.onrender.com'
});

export default apiserver;