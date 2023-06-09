// import { http } from './config'
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/";

const instance = axios.create({
    baseURL: API_BASE_URL,
  });
  
  export default {
    getPacientes: () => {
      return instance.get("usuario");
    },
    getUsuario: (id) => {
      const idUsuario = String(id);
      return instance.get(`usuario/${idUsuario}/`);
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