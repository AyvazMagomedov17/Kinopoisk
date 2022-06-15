import { EType } from "./enums/enums"
import { ICountrie, IGenre } from "./IFilm"

export interface IFilmForSearch {
    kinopoiskId: number
    imdbId: number | null
    nameRu: string | null
    nameEn: string | null
    nameOriginal: string | null
    countries: ICountrie[]
    genres: IGenre[]
    ratingKinopoisk: number | null
    ratingImdb: number | null
    year: number | null
    type: EType
    posterUrl: string
    posterUrlPreview: string
}

export interface IFilms {
    total: number
    totalPages: number
    items: IFilmForSearch[]
}