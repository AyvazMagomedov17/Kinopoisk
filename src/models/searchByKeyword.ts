import { filmsApi } from './../api/filmsApi';
import { ISearchByKeyword } from './../Interfaces/ISearchByKeyword';
import { createStore, createEffect, createEvent, attach, combine } from 'effector-next';

const getSearchByKeywordFilmsFx = createEffect(async ({ page, keyword }: { page: number, keyword: string }) => {
    const data = await filmsApi.searchByKeyword(page, keyword)
    return data
})
export const setKeyword = createEvent<string>()
export const setCurrentPageOfKeyword = createEvent<number>()
export const $keyword = createStore<string>('')
    .on(setKeyword, (_, payload) => payload)
export const $currentPageKeyword = createStore<number>(1)
    .on(setCurrentPageOfKeyword, (_, payload) => payload)
export const $searchByKeywordFiltres = combine({ $currentPageKeyword, $keyword })
export const $searchByKeywordFilms = createStore<ISearchByKeyword | null>(null)
    .on(getSearchByKeywordFilmsFx.doneData, (_, payload) => payload)


export const getSearchByKeywordFilmsAt = attach({
    effect: getSearchByKeywordFilmsFx,
    source: $searchByKeywordFiltres,
    mapParams: (params, data) => {
        return { keyword: data.$keyword, page: data.$currentPageKeyword }
    }
})