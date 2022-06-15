import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { IFilm } from '../../Interfaces/IFilm'
import TitlePage from './TitlePage'

type Props = {
    descrition: string,
    film: IFilm
}

const FilmIdPathTitle = ({ descrition, film }: Props) => {
    return (
        <Box marginBottom={5}>
            <Typography variant="h5" display='inline' color='rgba(255, 151, 0, 1)'>{descrition}  </Typography>
            <TitlePage>/ <Link href={'/film/' + film.kinopoiskId}>{film.nameRu || film.nameEn || film.nameOriginal}</Link></TitlePage>
        </Box>
    )
}

export default FilmIdPathTitle