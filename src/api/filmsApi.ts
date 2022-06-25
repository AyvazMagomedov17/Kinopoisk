import { IFiltres } from '../models/filtres';
import { IFilms } from './../Interfaces/IFilms';
import { ISearchByKeyword } from './../Interfaces/ISearchByKeyword';
import { instanse } from './instanse';

export const filmsApi = {
    searchByKeyword: async (page: number, keyword: string) => {

        const word = encodeURI(keyword)
        console.log(page, word)
        const resp = await instanse.get(`api/v2.1/films/search-by-keyword?keyword=${word}&page=${page}`)
        const data: ISearchByKeyword = resp.data
        return data
    },
    getFilms: async (filtres: IFiltres | null, currentPage: number) => {
        let base = `api/v2.2/films?page=${currentPage}`
        let type = filtres?.type ? `&type=${filtres?.type}` : ''
        let genres = filtres?.genres ? `&genres=${filtres?.genres}` : ''
        let countries = filtres?.countries ? `&countries=${filtres?.countries}` : ''
        let ratingFrom = isNaN(Number(filtres?.countries)) ? '' : `&ratingFrom=${filtres?.ratingFrom}`
        let ratingTo = isNaN(Number(filtres?.ratingTo)) ? '' : `&ratingTo=${filtres?.ratingTo}`
        let yearFrom = isNaN(Number(filtres?.yearFrom)) ? '' : `&yearFrom=${filtres?.yearFrom}`
        let yearTo = isNaN(Number(filtres?.yearTo)) ? '' : `&yearTo=${filtres?.yearTo}`
        let keyword = filtres?.keyWord ? `&keyword=${encodeURI(filtres.keyWord)}` : ''
        let order = filtres?.order ? `&order=${filtres.order}` : ''
        let url = base += type += genres += countries += ratingFrom += ratingTo += yearFrom += yearTo += keyword += order

        let resp = await instanse.get(url)
        const data: IFilms = resp.data
        return data
    }
}
