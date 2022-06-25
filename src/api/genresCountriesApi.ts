import { IGenresCountriesList } from "../Interfaces/IGenresCountriesList"
import { instanse } from "./instanse"

export const genresCountriesListApi = async () => {
    const resp = await instanse.get(`api/v2.2/films/filters`)
    const data: IGenresCountriesList = resp.data
    return data
}