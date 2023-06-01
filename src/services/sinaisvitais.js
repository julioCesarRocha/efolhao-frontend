import axios from "axios";

const API_BASE_URL = "e-viss.azurewebsites.net/";

const instance = axios.create({
    baseURL: API_BASE_URL,
  });

export default {
    listar: () => {
        return instance.get('sinaisvitais')
    },
    listarById: (id) => {
        return instance.get(`sinaisvitais/${id}`)
    },
    salvar:(sinalVital) => {
        return instance.post('sinaisvitais/', sinalVital)
    }
}