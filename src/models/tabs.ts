import { createEvent } from 'effector-next';
import { createStore } from 'effector-next';

export const changeFilterEv = createEvent<number>()
export const changeCategoriesEv = createEvent<number>()
export const changeFilmInfoTabsEv = createEvent<number>()
export const $tabs = createStore({ filtres: 0, categories: 0, filmInfo: 0 })
    .on(changeFilterEv, (_, payload) => ({ ..._, filtres: payload }))
    .on(changeCategoriesEv, (_, payload) => ({ ..._, categories: payload }))
    .on(changeFilmInfoTabsEv, (_, payload) => ({ ..._, filmInfo: payload }))
