// import { http } from './config'
import axios from "axios";

const API_BASE_URL = "e-viss.azurewebsites.net/";

const instance = axios.create({
    baseURL: API_BASE_URL,
  });
  
  export default {
    
    getNeurologico: () => {
      return instance.get("neurologico");
    },
    getDadosNeurologicos: (id) => {
      return instance.get(`neurologico/${id}`);
    },
    inserirDadosNeurologicos: (neurologicoData) => {
      return instance.post("neurologico/", neurologicoData);
    },
  };