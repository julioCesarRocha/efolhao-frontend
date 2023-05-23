import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8000/";

const instance = axios.create({
    baseURL: API_BASE_URL,
    });

export default {
    listar: () => {
        return instance.get('hemodinamica')
    },
    salvar:(hemodinamica) => {
        return instance.post('hemodinamica/', hemodinamica)
    }
}