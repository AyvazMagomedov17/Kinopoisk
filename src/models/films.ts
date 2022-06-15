import { IFilms } from './../Interfaces/IFilms';
import { createEffect, createEvent, createStore, } from "effector-next";
import { $filtres, IFiltres } from './filtres';
import { getFilmsApi } from '../api/api';

export const getFilmsEf = createEffect(async ({ page, filtres }: { page: number, filtres: IFiltres | null }) => {
    const data = await getFilmsApi(filtres, page)
    return data

})
export const changeCurrentPageSample = createEvent()
export const removeFilmsEv = createEvent()
export const $films = createStore<IFilms | null>(null)
    .on(getFilmsEf.doneData, (_, films) => films)
    .on(removeFilmsEv, () => null)