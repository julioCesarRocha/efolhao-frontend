import { http } from './config'

export default {
    listar: () => {
        return http.get('hemodinamica')
    },
    salvar:(hemodinamica) => {
        return http.post('hemodinamicaApi', hemodinamica)
    }
}