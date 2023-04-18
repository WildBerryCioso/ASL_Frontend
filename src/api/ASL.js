import axios from 'axios';
import { getEnvVariables } from '../helpers'

const { VITE_API_URL } = getEnvVariables();

const ASL = axios.create({
    baseURL: VITE_API_URL
    //baseURL: 'http://localhost:4000/api'
});

// Todo: configurar interceptores
ASL.interceptors.request.use(config =>{
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})



export default ASL;