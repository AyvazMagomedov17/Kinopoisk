import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { IAwardPerson } from '../../../Interfaces/IAwards'
import FilmMainLink from '../../Film/FilmMain/FilmMainLink'

type Props = {}

const AwardPerson = ({ nameEn, nameRu, kinopoiskId }: IAwardPerson) => {
    return (
        <Box>
            <FilmMainLink color='rgba(48, 122, 191, 1)'>
                <Link href={`/name/${kinopoiskId}`}>
                    <Typography fontSize={12}>
                        {nameRu}
                    </Typography>
                </Link>

            </FilmMainLink>


        </Box>
    )
}

export default AwardPerson