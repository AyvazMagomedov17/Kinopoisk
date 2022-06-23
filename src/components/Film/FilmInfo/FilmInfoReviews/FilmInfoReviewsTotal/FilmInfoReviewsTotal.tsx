import { Grid } from '@mui/material'
import React from 'react'
import { useMaxWidthQuery } from '../../../../../hooks/mediaQuery'
import { EReviewsSortType } from '../../../../../Interfaces/enums/EReviewsSortType'
import FilmInfoReviewsTotalItem from './FilmInfoReviewsTotalItem'

type Props = {
    total: number

    totalPositiveReviews: number
    totalNegativeReviews: number
    totalNeutralReviews: number
}

const FilmInfoReviewsTotal = ({ total, totalNegativeReviews, totalNeutralReviews, totalPositiveReviews }: Props) => {
    const _636px = useMaxWidthQuery(636)
    return (
        <Grid sx={{ 'borderLeft': _636px ? 'none' : '1px solid gray', 'paddingLeft': '10px' }} container>
            <FilmInfoReviewsTotalItem type={EReviewsSortType.DATE_DESC} color='rgba(0, 0, 0, 1)' count={total} description='Всего' />
            <FilmInfoReviewsTotalItem type={EReviewsSortType.USER_POSITIVE_RATING_DESC} color='#093' count={totalPositiveReviews} description='Положительные' />
            <FilmInfoReviewsTotalItem type={EReviewsSortType.USER_NEGATIVE_RATING_DESC} color='#d11f13' count={totalNegativeReviews} description='Отрицательные' />
            <FilmInfoReviewsTotalItem type={EReviewsSortType.DATE_DESC} color='#777' count={totalNeutralReviews} description='Нейтральные' />
        </Grid>
    )
}

export default FilmInfoReviewsTotal