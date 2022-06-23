import { EExtendedProffesionKey } from './enums/EProfessionKey';
import { ESex } from './enums/ESex';
export interface IPerson {
    personId: number
    webUrl: string | null
    nameRu: string | null
    nameEn: string | null
    sex: ESex | null
    posterUrl: string
    growth: string | null
    birthday: string | null
    death: string | null
    age: number | null
    birthplace: string | null
    deathplace: string | null
    hasAwards: number | null
    profession: string | null
    facts: string[]
    spouses: ISpouse[]
    films: IPersonFilm[]
}

export interface ISpouse {
    personId: number
    name: string | null
    divorced: boolean
    divorcedReason: string | null
    sex: ESex
    children: number
    webUrl: string
    relation: string
}

export interface IPersonFilm {
    filmId: number
    nameRu: string | null
    nameEn: string | null
    rating: string | null
    general: boolean
    description: string | null
    professionKey: EExtendedProffesionKey
}