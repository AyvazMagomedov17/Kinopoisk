import { EReviewsSortType } from './../Interfaces/enums/EReviewsSortType';
import { IImages } from './../Interfaces/IImages';
import { EImageType } from './../Interfaces/enums/EImageType';
import { IReviews } from './../Interfaces/IReviews';
import { IFacts } from './../Interfaces/IFacts';
import { ISimilars } from './../Interfaces/ISimilars';
import { IAwards } from './../Interfaces/IAwards';
import { IBoxOffice } from './../Interfaces/IBoxOffice';
import { IStaff } from './../Interfaces/IStaff';
import { IFilm } from "../Interfaces/IFilm"
import { ISeasons } from '../Interfaces/ISeasons';
import { instanse } from './instanse';

export const filmApi = {
    getFilm: async (filmId: number) => {
        const resp = await instanse.get(`api/v2.2/films/${filmId}`)
        const data: IFilm = resp.data
        return data
    },
    getStaff: async (filmId: number) => {
        const resp = await instanse.get(`api/v1/staff?filmId=${filmId}`)
        const data: IStaff = resp.data
        return data
    },
    getSeasons: async (filmId: number) => {
        const resp = await instanse.get(`api/v2.2/films/${filmId}/seasons`)
        const data: ISeasons = resp.data
        return data
    },
    getBoxOffice: async (filmId: number) => {
        const resp = await instanse.get(`api/v2.2/films/${filmId}/box_office`)
        const data: IBoxOffice = resp.data
        return data
    },
    getAwards: async (filmId: number) => {
        const resp = await instanse.get(`api/v2.2/films/${filmId}/awards`)
        const data: IAwards = resp.data
        return data
    },
    getSimilars: async (filmId: number) => {
        const resp = await instanse.get(`api/v2.2/films/${filmId}/similars`)
        const data: ISimilars = resp.data
        return data
    },
    getFacts: async (filmId: number) => {
        const resp = await instanse.get(`api/v2.2/films/${filmId}/facts`)
        const data: IFacts = resp.data
        return data
    },
    getReviews: async (filmId: number, page: number = 1, order: EReviewsSortType) => {
        const resp = await instanse.get(`api/v2.2/films/${filmId}/reviews?page=${page}&order=${order}`)
        const data: IReviews = resp.data
        return data
    },
    getImages: async (fiilmId: number, page: number, type: EImageType) => {
        const resp = await instanse.get(`api/v2.2/films/${fiilmId}/images?type=${type}&page=${page}`)
        const data: IImages = resp.data
        return data
    },


}