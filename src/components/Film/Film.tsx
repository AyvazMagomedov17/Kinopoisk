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


    return (
        <>

            <FilmMain seasons={film.$seasons} boxOffice={film.$boxOffice} awards={film.$awards} film={film.$film} staff={film.$staff} />
            <FilmInfo seasons={film.$seasons} reviews={film.$reviews} facts={film.$factsAboutFilm} similars={film.$similarsFilms} film={film.$film} />
        </>

    )
}

export default Film