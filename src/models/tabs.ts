import { TOPS } from './../paths/filmsPahts';
import { createEvent } from 'effector-next';
import { createStore } from 'effector-next';
import { EExtendedProffesionKey } from '../Interfaces/enums/EProfessionKey';
import { FILMS } from '../paths/common';

export const changeFilterEv = createEvent<string>()
export const changeCategoriesEv = createEvent<string>()
export const changeFilmsNameTabsEv = createEvent<EExtendedProffesionKey>()
export const changeFilmInfoTabsEv = createEvent<number>()
export const $tabs = createStore({ filtres: TOPS, categories: 'films', filmInfo: 0, filmsName: EExtendedProffesionKey.ACTOR })
    .on(changeFilterEv, (_, payload) => ({ ..._, filtres: payload }))
    .on(changeCategoriesEv, (_, payload) => ({ ..._, categories: payload }))
    .on(changeFilmInfoTabsEv, (_, payload) => ({ ..._, filmInfo: payload }))
    .on(changeFilmsNameTabsEv, (_, payload) => ({ ..._, filmsName: payload }))
