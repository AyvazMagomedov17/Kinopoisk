import { createEvent } from 'effector-next';
import { createStore } from 'effector-next';
import { EExtendedProffesionKey } from '../Interfaces/enums/EProfessionKey';

export const changeFilterEv = createEvent<number>()
export const changeCategoriesEv = createEvent<number>()
export const changeFilmsNameTabsEv = createEvent<EExtendedProffesionKey>()
export const changeFilmInfoTabsEv = createEvent<number>()
export const $tabs = createStore({ filtres: 0, categories: 0, filmInfo: 0, filmsName: EExtendedProffesionKey.ACTOR })
    .on(changeFilterEv, (_, payload) => ({ ..._, filtres: payload }))
    .on(changeCategoriesEv, (_, payload) => ({ ..._, categories: payload }))
    .on(changeFilmInfoTabsEv, (_, payload) => ({ ..._, filmInfo: payload }))
    .on(changeFilmsNameTabsEv, (_, payload) => ({ ..._, filmsName: payload }))
