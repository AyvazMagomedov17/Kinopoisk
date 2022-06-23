import { ESex } from './enums/ESex';
export interface IPersons {
    total: number
    items: IPersonForSearch[]
}

export interface IPersonForSearch {
    kinopoiskId: number
    webUrl: string
    nameRu: string | null
    nameEn: string | null
    sex: ESex | null
    posterUrl: string
}