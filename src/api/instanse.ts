import axios from 'axios';
export const instanse = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/',
    headers: {
        'X-API-KEY': String(process.env.APIKEY),
        'Content-Type': 'application/json'
    }
})

export const userInstanse = axios.create({
    baseURL: 'https://kinopoiskapp.herokuapp.com/api/',
    headers: {
        Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`
    }
})