import { http } from './config'

export default {
    listar: () => {
        return http.get('sinaisvitais')
    },
    salvar:(sinalVital) => {
        return http.post('sinalVital', sinalVital)
    }
}