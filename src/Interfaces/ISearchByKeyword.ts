import { EType } from './enums/enums';
import { ICountrie, IGenre } from './IFilm';
export interface ISearchByKeyword {
    keyword: string,
    pagesCount: number,
    films: ISearchByKeywordItem[]
    searchFilmsCountResult: number
}
export interface ISearchByKeywordItem {
    filmId: number
    nameRu: string
    nameEn: string
    type: EType
    year: string
    description: string
    filmLength: string
    countries: ICountrie[]
    genres: IGenre[]
    rating: string
    ratingVoteCount: number
    posterUrl: string
    posterUrlPreview: string
}