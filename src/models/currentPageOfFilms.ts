import { createEvent, createStore } from 'effector-next';
export const setCurrentPageOfFilms = createEvent<number>()
export const $currentPageOfFilms = createStore<number>(1).on(setCurrentPageOfFilms, (_, page) => page)