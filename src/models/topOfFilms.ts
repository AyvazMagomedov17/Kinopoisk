import { ITop } from './../Interfaces/ITop';
import { createEffect, createEvent, createStore, PageContext } from "effector-next"
import { EGetTopOfFilms } from '../Interfaces/enums/enums';
import { topApi } from '../api/topsApi';

export const getTopOfFilmsEf = createEffect(async ({ page, whatTop }: { page: number, whatTop: EGetTopOfFilms }) => {
    const data = await topApi.getTopFilms(page, whatTop)
    return data
})

export const removeTopFilmsEv = createEvent()

export const $topOfFilms = createStore<ITop | {}>({})
    .on(getTopOfFilmsEf.doneData, (_, data) => _ = data)
    .on(removeTopFilmsEv, () => ({}))
