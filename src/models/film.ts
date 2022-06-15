import { EImageType } from './../Interfaces/enums/EImageType';
import { EReviewsSortType } from './../Interfaces/enums/EReviewsSortType';
import { IFacts } from './../Interfaces/IFacts';
import { ISimilars } from './../Interfaces/ISimilars';
import { EProfessionKey } from './../Interfaces/enums/EProfessionKey';
import { IAwards } from './../Interfaces/IAwards';
import { IBoxOffice } from './../Interfaces/IBoxOffice';
import { ISeasons } from './../Interfaces/ISeasons';
import { IStaff } from './../Interfaces/IStaff';
import { IFilm } from './../Interfaces/IFilm';
import { createEffect, createStore, createEvent } from "effector-next";
import { filmApi } from '../api/filmApi';
import { attach, combine, sample } from 'effector'
import { $castFilter, setCastFilterEv, setIsOnCastPage } from './castFilter';
import { IReviews } from '../Interfaces/IReviews';
import { IImages } from '../Interfaces/IImages';

export type FilmIdType = {
    filmId: number
}

////////////////////////////////////////////////////////////////
const getFilmEf = createEffect(async ({ filmId }: FilmIdType) => {
    const data = await filmApi.getFilm(filmId)
    return data
})
const getStaffEf = createEffect(async ({ filmId }: FilmIdType) => {
    const data = await filmApi.getStaff(filmId)
    return data
})
export const getSeasonsEf = createEffect(async ({ filmId }: FilmIdType) => {
    const data = await filmApi.getSeasons(filmId)
    return data
})
const getBoxOfficeEf = createEffect(async ({ filmId }: FilmIdType) => {
    const data = await filmApi.getBoxOffice(filmId)
    return data
})
const getAwardsEf = createEffect(async ({ filmId }: FilmIdType) => {
    const data = await filmApi.getAwards(filmId)
    return data
})
const getSimilarFilmsFx = createEffect(async ({ filmId }: FilmIdType) => {
    const data = await filmApi.getSimilars(filmId)
    return data
})
const getFactsFx = createEffect(async ({ filmId }: FilmIdType) => {
    const data = await filmApi.getFacts(filmId)
    return data
})
const getReviewsFx = createEffect(async ({ filmId, page = 1, order }: { filmId: number, page: number, order: EReviewsSortType }) => {
    const data = await filmApi.getReviews(filmId, page, order)
    return data
})
const getImagesFx = createEffect(async ({ filmId, page, type }: { filmId: number, page: number, type: EImageType }) => {
    const data = await filmApi.getImages(filmId, page, type)
    return data
})

////////////////////////
export const resetfilm = createEvent()
export const setFilmId = createEvent<number>()

export const setReviewsPage = createEvent<number>()
export const setReviewsOrder = createEvent<EReviewsSortType>()
export const resetReviewsFiltres = createEvent()

export const setImagesCurrentPage = createEvent<number>()
export const setImagesFilter = createEvent<EImageType>()
export const resetImagesFiltres = createEvent()
///////////////////////////

export const $filmId = createStore<number>(0)
    .on(setFilmId, (_, id) => id)

export const $film = createStore<IFilm | null>(null)
    .on(getFilmEf.doneData, (_, film) => film)
    .reset(resetfilm)

export const $staff = createStore<IStaff | null>(null)
    .on(getStaffEf.doneData, (_, staff) => staff)
    .reset(resetfilm)

export const $seasons = createStore<ISeasons | null>(null)
    .on(getSeasonsEf.doneData, (_, payload) => payload)
    .reset(resetfilm)

export const $boxOffice = createStore<IBoxOffice | null>(null)
    .on(getBoxOfficeEf.doneData, (_, payload) => payload)
    .reset(resetfilm)

export const $awards = createStore<IAwards | null>(null)
    .on(getAwardsEf.doneData, (_, payload) => payload)
    .reset(resetfilm)

export const $similarsFilms = createStore<ISimilars | null>(null)
    .on(getSimilarFilmsFx.doneData, (_, payload) => payload)
    .reset(resetfilm)

export const $factsAboutFilm = createStore<IFacts | null>(null)
    .on(getFactsFx.doneData, (_, payload) => payload)
    .reset(resetfilm)



export const $reviews = createStore<IReviews | null>(null)
    .on(getReviewsFx.doneData, (_, payload) => payload)
    .reset(resetfilm)
export const $reviewsPage = createStore<number>(1)
    .on(setReviewsPage, (_, payload) => payload)
    .reset(resetReviewsFiltres)

export const $reviewsOrder = createStore<EReviewsSortType>(EReviewsSortType.DATE_DESC)
    .on(setReviewsOrder, (_, payload) => payload)
    .reset(resetReviewsFiltres)

export const $reviewsFiltres = combine({ $reviewsPage, $reviewsOrder, $filmId })

export const $images = createStore<IImages | null>(null)
    .on(getImagesFx.doneData, (_, payload) => payload)
    .reset(resetfilm)
export const $imagesPage = createStore<number>(1)
    .on(setImagesCurrentPage, (_, payload) => payload)
    .reset(resetImagesFiltres)
export const $imagesFilter = createStore<EImageType>(EImageType.STILL)
    .on(setImagesFilter, (_, payload) => payload)
    .reset(resetImagesFiltres)
export const $combinedImagesFilter = combine({ $imagesPage, $imagesFilter, $filmId })
export const $mainFilm = combine({ $film, $staff, $awards, $similarsFilms, $factsAboutFilm, $reviews, $images })
export interface IMainFilm {
    $film: IFilm
    $staff: IStaff
    $awards: IAwards
    $similarsFilms: ISimilars
    $factsAboutFilm: IFacts
    $reviews: IReviews
    $images: IImages
}


/////////////////////////////////////////////////

export const getBoxOfficeAt = attach({
    effect: getBoxOfficeEf,
    source: $filmId,
    mapParams: (params, data) => {
        return { filmId: data }
    }
})
export const getFilmAt = attach({
    effect: getFilmEf,
    source: $filmId,
    mapParams: (params, data) => {
        return { filmId: data }
    }
})
export const getStaffAt = attach({
    effect: getStaffEf,
    source: $filmId,
    mapParams: (params, data) => {
        return { filmId: data }
    }
})
export const getSeasonsAt = attach({
    effect: getSeasonsEf,
    source: $filmId,
    mapParams: (params, data) => {
        return { filmId: data }
    }
})

export const getAwardsAt = attach({
    effect: getAwardsEf,
    source: $filmId,
    mapParams: (params, data) => {
        return { filmId: data }
    }
})
export const getSimilarsAt = attach({
    effect: getSimilarFilmsFx,
    source: $filmId,
    mapParams: (params, data) => {
        return { filmId: data }
    }
})
export const getFactsAboutFilmAt = attach({
    effect: getFactsFx,
    source: $filmId,
    mapParams: (params, data) => {
        return { filmId: data }
    }
})
export const getReviewsAt = attach({
    effect: getReviewsFx,
    source: $reviewsFiltres,
    mapParams: (params, data) => {
        return { filmId: data.$filmId, page: data.$reviewsPage, order: data.$reviewsOrder }
    }
})
export const getImagesAt = attach({
    effect: getImagesFx,
    source: $combinedImagesFilter,
    mapParams: (params, data) => {
        return { filmId: data.$filmId, page: data.$imagesPage, type: data.$imagesFilter }
    }
})


/* ///
sample({
    clock: setIsOnCastPage,
    source: $castFilter,
    fn: (type, isTrue) => {
        if (isTrue) {
            debugger
            return type
        } else {
            debugger
            return EProfessionKey.UNKNOWN
        }

    },
    target: filterStaffEv
})
sample({
    clock: setCastFilterEv,
    source: $castFilter,
    fn: (type, isTrue) => {


        return type


    },
    target: filterStaffEv
})

 */







