import { Grid } from '@mui/material'
import React from 'react'
import FilmInfoReviewsTotalItem from './FilmInfoReviewsTotalItem'

type Props = {
    total: number

    totalPositiveReviews: number
    totalNegativeReviews: number
    totalNeutralReviews: number
}

const FilmInfoReviewsTotal = ({ total, totalNegativeReviews, totalNeutralReviews, totalPositiveReviews }: Props) => {
    return (
        <Grid sx={{ 'borderLeft': '1px solid gray', 'paddingLeft': '10px' }} flexDirection='column'>
            <FilmInfoReviewsTotalItem color='rgba(0, 0, 0, 1)' count={total} description='Всего' />
            <FilmInfoReviewsTotalItem color='#093' count={totalPositiveReviews} description='Положительные' />
            <FilmInfoReviewsTotalItem color='#d11f13' count={totalNegativeReviews} description='Отрицательные' />
            <FilmInfoReviewsTotalItem color='#777' count={totalNeutralReviews} description='Нейтральные' />
        </Grid>
    )
}

export default FilmInfoReviewsTotal