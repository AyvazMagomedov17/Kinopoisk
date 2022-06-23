import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useMaxWidthQuery } from '../../../../hooks/mediaQuery'
import { IOneEpisode } from '../../../../Interfaces/ISeasons'

type Props = {}

const Episode = ({ episodeNumber, nameEn, nameRu, releaseDate, seasonNumber, synopsis }: IOneEpisode) => {
    const _824px = useMaxWidthQuery(824)
    return (
        <Grid sx={{ 'border': '4px solid gray', 'borderRadius': '20px' }} item xs={_824px ? 12 : 5}>

            <Grid sx={{ 'padding': '20px' }} marginBottom={3} container>
                <Grid item xs={1}>
                    <Typography fontSize={20} display='inline'>
                        {episodeNumber})
                    </Typography>
                </Grid>
                <Grid marginBottom={2} item xs={11}>
                    <Typography fontWeight={700} fontSize={19} display='inline'>
                        {nameRu || nameEn}
                    </Typography>
                </Grid>
                {synopsis && <Grid marginBottom={1} item xs={12}>
                    <Typography fontWeight={600}>Описание:</Typography>
                    <Typography display='inline'>
                        {synopsis}
                    </Typography>
                </Grid>}

                <Grid item xs={12}>
                    <Typography fontWeight={600}>
                        Дата выхода:
                    </Typography>
                    <Typography>
                        {releaseDate}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>



    )
}

export default Episode