import { Typography } from '@mui/material'
import React from 'react'
import { IFilm } from '../../../Interfaces/IFilm'
import FilmRatingItem from './FilmRatingItem'

type Props = {
    film: IFilm
}

const FilmMainRaitings = ({ film }: Props) => {
    const ratingKinopoisk = film.ratingKinopoisk ? <FilmRatingItem votesCount={film.ratingKinopoiskVoteCount} title="кинопоиска" info={film.ratingKinopoisk} /> : null
    const IMDbRating = film.ratingImdb ? <FilmRatingItem votesCount={film.ratingImdbVoteCount} title="IMDb" info={film.ratingImdb} /> : null
    const criticksRating = film.ratingFilmCritics ? <FilmRatingItem votesCount={film.ratingFilmCriticsVoteCount} title="критиков" info={film.ratingFilmCritics} /> : null
    const criticksRFRating = film.ratingRfCritics ? <FilmRatingItem votesCount={film.ratingRfCriticsVoteCount} title="критиков РФ" info={film.ratingRfCritics} /> : null
    const MpaaRating = film.ratingMpaa ? <FilmRatingItem title="Mpaa" info={film.ratingMpaa} /> : null
    const awaitRating = film.ratingAwait ? <FilmRatingItem votesCount={film.ratingAwaitCount} title="ожидания" info={film.ratingAwait} /> : null
    return (
        <>
            <Typography variant="h5">Рейтинг</Typography>
            {ratingKinopoisk}
            {IMDbRating}
            {criticksRating}
            {criticksRFRating}
            {MpaaRating}
            {awaitRating}</>
    )
}

export default FilmMainRaitings