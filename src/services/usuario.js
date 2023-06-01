// import { http } from './config'
import axios from "axios";

const API_BASE_URL = "e-viss.azurewebsites.net/";

const instance = axios.create({
    baseURL: API_BASE_URL,
  });
  
  export default {
    getPacientes: () => {
      return instance.get("usuario");
    },
    getUsuario: (id) => {
      return instance.get(`usuario/${id}`);
    },
    criarUsuario: (usuarioData) => {
      return instance.post("usuario/", usuarioData);
    },
    atualizarUsuario: (id, usuarioData) => {
      return instance.put(`usuario/${id}`, usuarioData);
    },
    deletarUsuario: (id) => {
      return instance.delete(`usuario/${id}`);
    },
  };