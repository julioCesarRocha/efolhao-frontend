// import { http } from './config'
import axios from "axios";

const API_BASE_URL = "e-viss.azurewebsites.net/";

const instance = axios.create({
    baseURL: API_BASE_URL,
  });
  
  export default {
    
    getRespiracao: () => {
      return instance.get('respiracao');
    },

    getRespiracaoById: (id) => {
      return instance.get(`respiracao/${id}`);
    },
    inserirDadosRespiratorios: (respiracaoData) => {
      return instance.post('respiracao/', respiracaoData);
    },
  };