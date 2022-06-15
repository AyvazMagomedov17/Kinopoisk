import { Box, Grid, Tabs } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { IFacts } from '../../../Interfaces/IFacts'
import { IFilm } from '../../../Interfaces/IFilm'
import { IReviews } from '../../../Interfaces/IReviews'
import { ISimilars } from '../../../Interfaces/ISimilars'
import FilmInfoMain from './FilmInfoMain'
import FilmInfoTabs from './FilmInfoTabs'
import SliderOfSImilarsFilms from './SimilarFilms/SliderOfSImilarsFilms'

type Props = {
    film: IFilm
    similars: ISimilars
    facts: IFacts
    reviews: IReviews
}

const FilmInfo = ({ film, similars, facts, reviews }: Props) => {
    return (
        <Container>
            <Box sx={{ 'minHeight': '100vh' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <FilmInfoTabs />
                    </Grid>
                    <Grid item xs={12}>
                        <FilmInfoMain reviews={reviews} facts={facts} similars={similars} film={film} />
                    </Grid>
                </Grid>


            </Box>
        </Container>

    )
}

export default FilmInfo