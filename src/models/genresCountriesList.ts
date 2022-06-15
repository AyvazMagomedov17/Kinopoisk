import { createEffect, createStore } from 'effector-next';
import { gentresCountriesListApi } from '../api/api';
import { IGenresCountriesList } from '../Interfaces/IGenresCountriesList';


export const getGenrecCountriesListEf = createEffect(async () => {
    const data = await gentresCountriesListApi()
    return data
})
export const $genresCountriesList = createStore<IGenresCountriesList | null>(null).on(getGenrecCountriesListEf.doneData, (_, data) => data)

