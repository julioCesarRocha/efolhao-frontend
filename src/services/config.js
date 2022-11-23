import axios from 'axios'
//import Cookies from 'js-cookie'


export const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/sinaisVitaisApi/',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
     // 'X-CSRFToken': Cookies.get('csrftoken')
    }
})