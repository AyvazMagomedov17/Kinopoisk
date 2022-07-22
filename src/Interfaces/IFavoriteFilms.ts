import { IFilm } from './IFilm';
export interface IFavoriteFilms {
    count: number,
    totalPages: number,
    items: IFilm[]
}

export interface iFavoriteFilm {
    item: null | IFilm
}