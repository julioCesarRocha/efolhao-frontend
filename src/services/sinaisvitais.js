import { fetch } from './config'

export default {
    listar: () => {
        return fetch.get('sinaisvitais')
    }
}