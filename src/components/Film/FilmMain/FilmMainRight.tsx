import { ActionTypes } from "@mui/base"
import { Grid, Typography } from "@mui/material"
import { useStore } from "effector-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { EBoxOfficeType } from "../../../Interfaces/enums/EBoxOfficeType"
import { EProfessionKey } from "../../../Interfaces/enums/EProfessionKey"
import { IFilm } from "../../../Interfaces/IFilm"
import { IStaff } from "../../../Interfaces/IStaff"
import { $boxOffice } from "../../../models/film"
import FilmMainLink from "./FilmMainLink"
import FilmRatingItem from "./FilmRatingItem"


type Props = {
    film: IFilm

}

const FilmMainRight = ({ film }: Props) => {
    const boxOffice = useStore($boxOffice)
    const ratingKinopoisk = film.ratingKinopoisk ? <FilmRatingItem votesCount={film.ratingKinopoiskVoteCount} title="кинопоиска" info={film.ratingKinopoisk} /> : null
    const IMDbRating = film.ratingImdb ? <FilmRatingItem votesCount={film.ratingImdbVoteCount} title="IMDb" info={film.ratingImdb} /> : null
    const criticksRating = film.ratingFilmCritics ? <FilmRatingItem votesCount={film.ratingFilmCriticsVoteCount} title="критиков" info={film.ratingFilmCritics} /> : null
    const criticksRFRating = film.ratingRfCritics ? <FilmRatingItem votesCount={film.ratingRfCriticsVoteCount} title="критиков РФ" info={film.ratingRfCritics} /> : null
    const MpaaRating = film.ratingMpaa ? <FilmRatingItem title="Mpaa" info={film.ratingMpaa} /> : null
    const awaitRating = film.ratingAwait ? <FilmRatingItem votesCount={film.ratingAwaitCount} title="ожидания" info={film.ratingAwait} /> : null
    const boxOfficeInfo = boxOffice?.total ? boxOffice?.items.map(item => <FilmRatingItem color="white" fz={18} info={item.amount.toLocaleString('ru') + ' ' + item.symbol} title={item.type === EBoxOfficeType.BUDGET ? 'Бюджет' : item.type === EBoxOfficeType.MARKETING ? 'Затраты на рекламу' : item.type === EBoxOfficeType.USA ? 'Сборы в США' : item.type === EBoxOfficeType.RUS ? 'Сборы в России' : 'Мировые сборы'} />) : null
    const actors: any[] = []
    const asPath = useRouter().asPath

    return (
        <>
            <Typography variant="h5">Рейтинг</Typography>
            {ratingKinopoisk}
            {IMDbRating}
            {criticksRating}
            {criticksRFRating}
            {MpaaRating}
            {awaitRating}
            {boxOffice?.total ? <Typography paddingTop={4} variant="h5">Бюджет и сборы</Typography> : null}
            {boxOfficeInfo}

        </>
    )
}

export default FilmMainRight