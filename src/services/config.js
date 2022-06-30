import axios from 'axios'
//import Cookies from 'js-cookie'


export const http = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000,
    headers: {
      //'Content-Type': 'application/json',
      //'X-CSRFToken': Cookies.get('csrftoken')
    }
})