import axios from 'axios';
import {API_base_URL} from './constants';
//creer une instance axios afin de la ré-utiliser plus tard
//Pour ne pas à avoir à re renseigner l'url de base de notre api
//Ici, en local -> http://localhost:4001/api/v1
const instance = axios.create({
    baseURL: API_base_URL,
    withCredentials: true   
})

export const addAuth = (token: String) => {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance