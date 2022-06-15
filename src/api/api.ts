import { IFilms } from './../Interfaces/IFilms';
import { IGenresCountriesList } from './../Interfaces/IGenresCountriesList';
import { ITop } from './../Interfaces/ITop';
import axios from "axios";
import { EGetTopOfFilms } from '../Interfaces/enums/enums';
import { IFiltres } from '../models/filtres';
import { $currentPageOfFilms } from '../models/currentPageOfFilms';

export const instanse = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/',
    headers: {

        'X-API-KEY': 'a62624d0-c0d2-4bdd-b785-410e82901881',
        'Content-Type': 'application/json'
    }
})


export const topApi = {
    getTopFilms: async (page: number = 1, whatTop: EGetTopOfFilms) => {

        const resp = await instanse.get(`api/v2.2/films/top?type=${whatTop}&page=${page}`)
        const data: ITop = resp.data
        return data
    },

}
export const gentresCountriesListApi = async () => {
    const resp = await instanse.get(`api/v2.2/films/filters`)
    const data: IGenresCountriesList = resp.data
    return data
}

export const getFilmsApi = async (filtres: IFiltres | null, currentPage: number) => {
    let base = `api/v2.2/films?page=${currentPage}`
    let type = filtres?.type ? `&type=${filtres?.type}` : ''
    let genres = filtres?.genres ? `&genres=${filtres?.genres}` : ''
    let countries = filtres?.countries ? `&countries=${filtres?.countries}` : ''
    let ratingFrom = isNaN(Number(filtres?.countries)) ? '' : `&ratingFrom=${filtres?.ratingFrom}`
    let ratingTo = isNaN(Number(filtres?.ratingTo)) ? '' : `&ratingTo=${filtres?.ratingTo}`
    let yearFrom = isNaN(Number(filtres?.yearFrom)) ? '' : `&yearFrom=${filtres?.yearFrom}`
    let yearTo = isNaN(Number(filtres?.yearTo)) ? '' : `&yearTo=${filtres?.yearTo}`
    let keyword = filtres?.keyWord ? `&keyword=${encodeURI(filtres.keyWord)}` : ''
    let url = base += type += genres += countries += ratingFrom += ratingTo += yearFrom += yearTo += keyword

    let resp = await instanse.get(url)
    const data: IFilms = resp.data
    return data
}
