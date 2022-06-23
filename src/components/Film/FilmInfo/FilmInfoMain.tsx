import { Grid, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import React from 'react'
import { IFacts } from '../../../Interfaces/IFacts'
import { IFilm } from '../../../Interfaces/IFilm'
import { IReviews } from '../../../Interfaces/IReviews'
import { ISeasons } from '../../../Interfaces/ISeasons'
import { ISimilars } from '../../../Interfaces/ISimilars'
import { $seasons } from '../../../models/film'
import FilmFacts from './FilmFacts/FilmFacts'
import FilmInfoReviews from './FilmInfoReviews/FilmInfoReviews'
import FilmInfoTitle from './FilmInfoTitle'
import Seasons from './Seasons/Seasons'
import SliderOfSImilarsFilms from './SimilarFilms/SliderOfSImilarsFilms'

type Props = {
    film: IFilm
    similars: ISimilars
    facts: IFacts
    reviews: IReviews

}

const FilmInfoMain = ({ film, similars, facts, reviews }: Props) => {
    const seasons = useStore($seasons)

    return (
        <>
            <Grid xs={11} item>
                <FilmInfoTitle>Описание:</FilmInfoTitle>
                {film.description ? <Typography fontStyle='italic' fontSize={17}>{film.description}</Typography> : <Typography fontStyle='italic' fontSize={17}>Описания нет</Typography>}
            </Grid>
            <Grid xs={12} item>
                {similars.total ? <>
                    <FilmInfoTitle>Похожие фильмы:</FilmInfoTitle>
                    <SliderOfSImilarsFilms similars={similars} />
                </> : null}
            </Grid>

            {facts.total ?
                <>
                    <Grid xs={12} item>
                        <FilmInfoTitle>Знаете ли вы, что…</FilmInfoTitle>
                        <FilmFacts facts={facts} />
                    </Grid>

                </> : null
            }
            {
                seasons?.total ? <Grid xs={12} item>
                    <FilmInfoTitle>Информация о сезонах</FilmInfoTitle>
                    <Seasons seasons={seasons} />
                </Grid> : null
            }
            {
                reviews.total ?
                    <Grid xs={12} item>
                        <FilmInfoTitle>Отзывы:</FilmInfoTitle>
                        <FilmInfoReviews reviews={reviews} />
                    </Grid> : null
            }

        </>

    )
}

export default FilmInfoMain