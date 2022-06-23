import { EFilmsOrder } from './../Interfaces/enums/EFilmsOrder';
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
    order: EFilmsOrder

}
export const setFiltresEv = createEvent<IFiltres>()
export const $filtres = createStore<IFiltres>({ genres: null, countries: null, type: EType.ALL, ratingFrom: 0, ratingTo: 10, yearFrom: 1000, yearTo: 3000, keyWord: '', order: EFilmsOrder.RATING }).on(setFiltresEv, (_, filter) => filter)