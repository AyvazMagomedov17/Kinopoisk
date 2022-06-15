import { EProductionStatus, EType } from "./enums/enums"
import { IFilmForSearch } from "./IFilms"

export interface IFilm extends IFilmForSearch {
    coverUrl: string | null
    logoUrl: string | null
    reviewsCount: number
    ratingGoodReview: number | null
    ratingGoodReviewVoteCount: number | null
    ratingKinopoiskVoteCount: number | null
    ratingImdbVoteCount: number | null
    ratingFilmCritics: number | null
    ratingFilmCriticsVoteCount: number | null
    ratingAwait: number | null
    ratingAwaitCount: number | null
    ratingRfCritics: number | null
    ratingRfCriticsVoteCount: number | null
    webUrl: string
    filmLength: number | null
    slogan: string | null
    description: string | null
    shortDescription: string | null
    editorAnnotation: string | null
    isTicketsAvailable: boolean
    productionStatus: EProductionStatus
    ratingMpaa: string | null
    ratingAgeLimits: string | null
    hasImax: boolean | null
    has3D: boolean | null
    lastSync: string
    startYear: number | null
    endYear: number | null
    serial: boolean | null
    shortFilm: boolean | null
    completed: boolean | null
}



export interface ICountrie {
    country: string
}
export interface IGenre {
    genre: string
}

