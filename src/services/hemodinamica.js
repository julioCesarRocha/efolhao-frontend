import axios from 'axios';

const API_BASE_URL = "e-viss.azurewebsites.net/";

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