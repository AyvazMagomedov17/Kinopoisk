

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
    title: string,
    info: any,
}

const FilmInfoItem = ({ title, info }: Props) => {
    return (
        <Grid marginBottom={2} item xs={12}>
            <Box sx={{ 'display': 'flex' }}>
                <Typography sx={{ 'flex': '0 0 260px' }} paddingRight={7} fontSize={15} color='rgba(94, 91, 93, 1)'>{title}:</Typography>
                <Typography sx={{ 'flex': '1 0 300px', }} fontSize={16} >{info}</Typography>

            </Box>

        </Grid>
    )
}

export default FilmInfoItem