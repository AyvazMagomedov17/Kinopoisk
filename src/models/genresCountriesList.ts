import { createEffect, createStore } from 'effector-next';
import { genresCountriesListApi } from '../api/genresCountriesApi';
import { IGenresCountriesList } from '../Interfaces/IGenresCountriesList';


export const getGenresCountriesListEf = createEffect(async () => {
    const data = await genresCountriesListApi()
    return data
})
export const $genresCountriesList = createStore<IGenresCountriesList | null>(null).on(getGenresCountriesListEf.doneData, (_, data) => data)

