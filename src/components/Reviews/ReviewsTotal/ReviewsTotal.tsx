import { Grid } from '@mui/material'
import React from 'react'
import ReviewTotalItem from './ReviewTotalItem'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { EReviewsSortType } from '../../../Interfaces/enums/EReviewsSortType';
type Props = {
    total: number
    totalPositiveReviews: number
    totalNegativeReviews: number
    totalNeutralReviews: number
}

const ReviewsTotal = ({ total, totalNegativeReviews, totalNeutralReviews, totalPositiveReviews }: Props) => {

    return (
        <>
            <Grid flexDirection='row' container>
                <ReviewTotalItem image={<ImportContactsIcon />} count={total} title='Всего' />
                <ReviewTotalItem type={EReviewsSortType.USER_POSITIVE_RATING_DESC} image={<ThumbUpIcon />} count={totalPositiveReviews} title='Положительные' />
                <ReviewTotalItem type={EReviewsSortType.USER_NEGATIVE_RATING_DESC} image={<ThumbDownIcon />} count={totalNegativeReviews} title='Отрицательные' />
                <ReviewTotalItem image={<ReceiptIcon />} count={totalNeutralReviews} title='Нейтральные' />
            </Grid>

        </>
    )
}

export default ReviewsTotal