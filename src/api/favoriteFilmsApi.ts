import { userInstanse } from './instanse';
import { IFilm } from './../Interfaces/IFilm';
import { iFavoriteFilm, IFavoriteFilms } from '../Interfaces/IFavoriteFilms';
export const favoriteFilmsApi = {
    addFilms: async (film: IFilm) => {
        const resp = await userInstanse.post('favoriteFilms/add', { ...film })
        const data: IFilm = resp.data.film
        return data
    },
    getFilms: async () => {
        const resp = await userInstanse.get('favoriteFilms/get')
        const data: IFavoriteFilms = resp.data
        return data
    },
    getFilm: async (kinopoiskId: number) => {
        const resp = await userInstanse.get(`favoriteFilms/getFilm/${kinopoiskId}`)
        const data: iFavoriteFilm = resp.data
        return data
    },
    deleteFilm: async (kinopoiskId: number) => {
        const resp = await userInstanse.delete(`favoriteFilms/delete/${kinopoiskId}`)
        const data: {
            isDeleted: boolean
            item: IFilm
        } = resp.data
        return data

    }
}