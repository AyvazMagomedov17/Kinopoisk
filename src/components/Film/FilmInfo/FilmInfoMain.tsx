import { Grid, Typography } from '@mui/material'
import React from 'react'
import { IFacts } from '../../../Interfaces/IFacts'
import { IFilm } from '../../../Interfaces/IFilm'
import { IReviews } from '../../../Interfaces/IReviews'
import { ISimilars } from '../../../Interfaces/ISimilars'
import FilmFacts from './FilmFacts/FilmFacts'
import FilmInfoReviews from './FilmInfoReviews/FilmInfoReviews'
import FilmInfoTitle from './FilmInfoTitle'
import SliderOfSImilarsFilms from './SimilarFilms/SliderOfSImilarsFilms'

type Props = {
    film: IFilm
    similars: ISimilars
    facts: IFacts
    reviews: IReviews
}

const FilmInfoMain = ({ film, similars, facts, reviews }: Props) => {
    return (
        <>
            <Grid xs={9} item>
                <FilmInfoTitle>Описание:</FilmInfoTitle>
                <Typography fontStyle='italic' fontSize={17}>{film.description}</Typography>
            </Grid>
            <Grid xs={12} item>
                {similars.total ? <>
                    <FilmInfoTitle>Похожие фильмы:</FilmInfoTitle>
                    <SliderOfSImilarsFilms similars={similars} />
                </> : null}
            </Grid>

            {facts.total ?
                <>
                    <Grid xs={9} item>
                        <FilmInfoTitle>Знаете ли вы, что…</FilmInfoTitle>
                        <FilmFacts facts={facts} />
                    </Grid>

                </> : null}
            {reviews.total ?
                <Grid xs={12} item>
                    <FilmInfoTitle>Отзывы:</FilmInfoTitle>
                    <FilmInfoReviews reviews={reviews} />
                </Grid> : null}

        </>

    )
}

export default FilmInfoMain