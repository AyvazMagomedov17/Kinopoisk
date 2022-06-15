import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { ISimilarsItem } from '../../../../Interfaces/ISimilars'

type Props = {}

const SimilarFilmsItem = ({ filmId, nameEn, nameOriginal, nameRu, posterUrl, posterUrlPreview, relationType }: ISimilarsItem) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/film/${filmId}`)
    }
    return (
        <div onClick={handleClick}>
            <Grid sx={
                {
                    'maxWidth': 140,
                    'marginRight': '30px',
                    'cursor': 'pointer',
                    'transition': 'all 0.3s',
                    '&:hover': {
                        'transform': 'scale(1.1)',
                        'transition': 'all 0.3s'
                    }
                }
            } flexDirection='row' container>
                <Grid sx={{ 'height': '210px' }} item >
                    <Paper sx={{ 'width': 140, 'height': '210px' }}>
                        <img style={{ 'height': '210px', 'objectFit': 'cover' }} src={posterUrl || posterUrlPreview} alt="" />
                    </Paper>

                    <Typography color='rgba(62, 18, 134, 1)' fontSize={14}>{nameRu}</Typography>
                    <Typography color="rgba(129, 129, 129, 1)" fontSize={12}>{nameEn}</Typography>
                </Grid>

            </Grid>
        </div>

    )
}

export default SimilarFilmsItem