import { EType } from './../Interfaces/enums/enums';
import { createEvent, createStore } from "effector-next";

export interface IFiltres {
    genres: null | number
    countries: null | number
    type: EType
    ratingFrom: number
    ratingTo: number
    yearFrom: number
    yearTo: number
    keyWord: string

}
export const setFiltresEv = createEvent<IFiltres | null>()
export const $filtres = createStore<IFiltres | null>(null).on(setFiltresEv, (_, filter) => filter)