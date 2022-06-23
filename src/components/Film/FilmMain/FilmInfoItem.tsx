

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
    title: string,
    info: any,
}

const FilmInfoItem = ({ title, info }: Props) => {
    return (
        <Grid marginBottom={2} item xs={12}>
            <Grid container >
                <Grid xs={6}>
                    <Typography paddingRight={7} fontSize={15} color='rgba(94, 91, 93, 1)'>{title}:</Typography>
                </Grid>
                <Grid sx={{ 'maxWidth': '200px', 'wordBreak': 'break-word' }} xs={6}>
                    <Typography fontSize={16} >{info}</Typography>
                </Grid>


            </Grid>

        </Grid>
    )
}

export default FilmInfoItem