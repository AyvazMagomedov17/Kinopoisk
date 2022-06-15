import { ICountrie, IGenre } from './IFilm';
export interface ITop {
    pagesCount: number
    films: [{
        filmId: number
        nameRu: string | null
        nameEn: string | null
        year: string | null
        filmLength: string | null
        countries: ICountrie[]
        genres: IGenre[]
        rating: number | null
        ratingVoteCount: number | null
        posterUrl: string | null
        posterUrlPreview: string | null
    }]

}