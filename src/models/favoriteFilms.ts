import { IFilm } from './../Interfaces/IFilm';
import { favoriteFilmsApi } from './../api/favoriteFilmsApi';
import { IFavoriteFilms, iFavoriteFilm } from './../Interfaces/IFavoriteFilms';
import { createEffect, createEvent, createStore } from "effector-next";

export const getFavoriteFilmsFX = createEffect(async () => {
    const data = await favoriteFilmsApi.getFilms()
    return data
})
export const addFavoriteFilmFx = createEffect(async (film: IFilm) => {
    const data = await favoriteFilmsApi.addFilms(film)
    return data
})


export const getFavoriteFilmFx = createEffect(async ({ kinopoiskId }: { kinopoiskId: number }) => {
    const data = await favoriteFilmsApi.getFilm(kinopoiskId)
    return data
})
export const deleteFavoriteFilmFx = createEffect(async (kinopoiskId: number) => {
    const data = await favoriteFilmsApi.deleteFilm(kinopoiskId)
    return data
})

export const resetFavoriteFilmEv = createEvent()
export const $favoriteFilms = createStore<IFavoriteFilms | null>(null)
    .on(getFavoriteFilmsFX.doneData, (_, payload) => payload)


export interface I$favoriteFilm extends iFavoriteFilm {

    error: string
}
export const $favoriteFilm = createStore<I$favoriteFilm | null>(null)
    .on(getFavoriteFilmFx.doneData, (_, payload) => ({ item: payload.item, error: '' }))
    .on(getFavoriteFilmFx.failData, (_, error: any) => ({ item: null, error: error.response.data.message }))
    .on(addFavoriteFilmFx.doneData, (_, payload) => ({ item: payload, error: '' }))
    .on(addFavoriteFilmFx.failData, (_, error: any) => ({ item: null, error: error.response.data.message }))
    .on(deleteFavoriteFilmFx.doneData, (_, payload) => {
        if (payload.isDeleted) {
            return { item: null, error: '' }
        } else {
            if (_) {
                return { item: _.item, error: _.error }
            }

        }
    })
    .reset(resetFavoriteFilmEv)