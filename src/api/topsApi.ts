import { EGetTopOfFilms } from '../Interfaces/enums/enums';
import { ITop } from './../Interfaces/ITop';
import { instanse } from './instanse';
export const topApi = {
    getTopFilms: async (page: number = 1, whatTop: EGetTopOfFilms) => {

        const resp = await instanse.get(`api/v2.2/films/top?type=${whatTop}&page=${page}`)
        const data: ITop = resp.data
        return data
    },

}