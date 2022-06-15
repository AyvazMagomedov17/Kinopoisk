import { EReviewType } from "./enums/EReviewType"

export interface IReviews {
    total: number
    totalPages: number
    totalPositiveReviews: number
    totalNegativeReviews: number
    totalNeutralReviews: number
    items: IReview[]
}

export interface IReview {
    kinopoiskId: number
    type: EReviewType
    positiveRating: number
    negativeRating: number
    author: string
    title: string
    description: string
    date: string
}