import { useStore } from "effector-react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { EType } from "../../Interfaces/enums/enums"
import { $filmId, getBoxOfficeAt, getSeasonsAt, getSeasonsEf, IMainFilm, resetfilm, setFilmId } from "../../models/film"
import Header from "../common/Header/Header"
import FilmInfo from "./FilmInfo/FilmInfo"
import FilmInfoTabs from "./FilmInfo/FilmInfoTabs"
import FilmMain from "./FilmMain/FilmMain"

type Props = {
    film: IMainFilm
}

const Film = ({ film }: Props) => {

    const id = useStore($filmId)
    const query = useRouter().query


    useEffect(() => {
        resetfilm()
        if (film.$film.type === EType.TV_SERIES || film.$film.type === EType.MINI_SERIES) {
            getSeasonsAt('')
        }
        if (film.$film.type === EType.FILM) {
            getBoxOfficeAt('')
        }

    }, [id])

    return (
        <>

            <FilmMain awards={film.$awards} film={film.$film} staff={film.$staff} />
            <FilmInfo reviews={film.$reviews} facts={film.$factsAboutFilm} similars={film.$similarsFilms} film={film.$film} />
        </>

    )
}

export default Film