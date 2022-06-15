import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { EReviewType } from '../../../../Interfaces/enums/EReviewType'
import { IReview } from '../../../../Interfaces/IReviews'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface IProps extends IReview {
    isClickOnMore: boolean
}

const FilmInfoReviewItem = ({ isClickOnMore, author, description, kinopoiskId, negativeRating, positiveRating, title, type, date }: IProps) => {
    return (
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
                    <Grid item xs={7}>
                        <Typography sx={{ 'cursor': 'pointer' }} fontWeight={700} fontSize={17}>
                            {author}
                        </Typography>
                    </Grid>
                    <Grid xs={2} item>
                        {date.slice(0, 10)}
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid marginRight={'20px'} item xs={4}>
                                <Box sx={{ 'display': 'flex', 'alignItems': 'center' }}>
                                    <ThumbUpAltIcon sx={{ 'marginRight': '5px' }} color='success' />
                                    <Typography display='inline' >
                                        {positiveRating}
                                    </Typography>
                                </Box>

                            </Grid>

                            <Grid item xs={5}>
                                <Box sx={{ 'display': 'flex', 'alignItems': 'center' }}>
                                    <ThumbDownIcon sx={{ 'marginRight': '5px' }} color='error' />
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
    )
}

export default FilmInfoReviewItem