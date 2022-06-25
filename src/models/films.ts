import { filmsApi } from './../api/filmsApi';
import { IFilms } from './../Interfaces/IFilms';
import { createEffect, createEvent, createStore, } from "effector-next";
import { IFiltres } from './filtres';

export const getFilmsEf = createEffect(async ({ page, filtres }: { page: number, filtres: IFiltres | null }) => {
    const data = await filmsApi.getFilms(filtres, page)
    return data

})
export const changeCurrentPageSample = createEvent()
export const removeFilmsEv = createEvent()
export const $films = createStore<IFilms | null>(null)
    .on(getFilmsEf.doneData, (_, films) => films)
    .on(removeFilmsEv, () => null)