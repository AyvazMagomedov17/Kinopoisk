import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { EReviewType } from '../../../../Interfaces/enums/EReviewType'
import { IReview } from '../../../../Interfaces/IReviews'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useMaxWidthQuery } from '../../../../hooks/mediaQuery'
import ReviewModal from './ReviewModal'

interface IProps extends IReview {
    isClickOnMore: boolean
}

const FilmInfoReviewItem = ({ isClickOnMore, author, description, kinopoiskId, negativeRating, positiveRating, title, type, date }: IProps) => {
    const props = { isClickOnMore, author, description, kinopoiskId, negativeRating, positiveRating, title, type, date }
    const _635px = useMaxWidthQuery(635)
    const _480px = useMaxWidthQuery(490)
    const _425px = useMaxWidthQuery(425)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClick = () => {
        setIsModalOpen(true)
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <span onClick={handleClick}>
                <Grid marginBottom={3} sx={
                    {
                        'minHeight': '300px',
                        'padding': '30px 40px 20px 40px',
                        'borderRadius': '15px',
                        'border': '3px dashed rgba(35, 107, 0, 1)',
                        'backgroundColor': type === EReviewType.POSITIVE
                            ? 'rgba(76, 168, 61, 0.4)'
                            : type === EReviewType.NEGATIVE
                                ? 'rgba(195, 109, 51, 0.4)'
                                : type === EReviewType.NEUTRAL
                                    ? 'rgba(159, 151, 145, 0.4)'
                                    : 'white'
                    }
                } container>
                    <Grid item xs={12}>
                        <Grid paddingBottom={1} marginBottom={4} sx={{ 'borderBottom': '1px solid black' }} container>
                            <Grid marginBottom={0.5} item xs={_480px ? 12 : _635px ? 5 : 6}>
                                <Typography sx={{ 'cursor': 'pointer' }} fontWeight={700} fontSize={17}>
                                    {author}
                                </Typography>
                            </Grid>
                            <Grid marginBottom={0.5} xs={_480px ? 12 : _635px ? 4 : 3} item>
                                <Typography fontStyle='italic' fontSize={13}>
                                    {date.slice(0, 10)}
                                </Typography>

                            </Grid>
                            <Grid marginBottom={0.5} item xs={_480px ? 5 : 3}>
                                <Grid container>
                                    <Grid marginRight={'20px'} item xs={4}>
                                        <Box sx={{ 'display': 'flex', 'alignItems': 'center' }}>
                                            <ThumbUpAltIcon fontSize={_425px ? 'small' : 'medium'} sx={{ 'marginRight': '5px' }} color='success' />
                                            <Typography display='inline' >
                                                {positiveRating}
                                            </Typography>
                                        </Box>

                                    </Grid>

                                    <Grid item xs={5}>
                                        <Box sx={{ 'display': 'flex', 'alignItems': 'center' }}>
                                            <ThumbDownIcon fontSize={_425px ? 'small' : 'medium'} sx={{ 'marginRight': '5px' }} color='error' />
                                            <Typography display='inline' >
                                                {negativeRating}

                                            </Typography>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid marginBottom={2} item xs={12}>
                            <Typography fontSize={17} fontWeight={600} textAlign='center'>{title}</Typography>
                        </Grid>
                        <Grid item sx={{ 'height': isClickOnMore ? 'auto' : '217px', 'overflow': isClickOnMore ? 'auto' : 'hidden' }} xs={12}>
                            <Typography fontSize={14} >
                                {description}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid >
            </span>

            <ReviewModal {...props} closeModal={handleCloseModal} isOpen={isModalOpen && _635px} />
        </>

    )
}

export default FilmInfoReviewItem