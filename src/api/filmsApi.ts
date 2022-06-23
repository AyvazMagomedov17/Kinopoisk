import { ISearchByKeyword } from './../Interfaces/ISearchByKeyword';
import { instanse } from "./api"

export const filmsApi = {
    searchByKeyword: async (page: number, keyword: string) => {

        const word = encodeURI(keyword)
        console.log(page, word)
        const resp = await instanse.get(`api/v2.1/films/search-by-keyword?keyword=${word}&page=${page}`)
        const data: ISearchByKeyword = resp.data
        return data
    }
}