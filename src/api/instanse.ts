import axios from 'axios';
export const instanse = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/',
    headers: {
        'X-API-KEY': String(process.env.APIKEY),
        'Content-Type': 'application/json'
    }
})