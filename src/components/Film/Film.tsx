
import { I$favoriteFilm } from "../../models/favoriteFilms"
import { IMainFilm } from "../../models/film"
import FilmInfo from "./FilmInfo/FilmInfo"
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