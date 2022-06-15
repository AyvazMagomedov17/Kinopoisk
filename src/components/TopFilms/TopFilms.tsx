import { useEvent, useStore } from "effector-react"
import { useRouter } from "next/router"
import { EGetTopOfFilms } from "../../Interfaces/enums/enums"
import { ITop } from "../../Interfaces/ITop"
import { $currentPageOfFilms, setCurrentPageOfFilms } from "../../models/currentPageOfFilms"
import CardFilm from "../CardsFilms/CardFilm/CardFilm"
import ListOfFilms from "../common/ListOfFilms"


type Props = {
    films: ITop
}

const TopFilms = ({ films }: Props) => {
    const currentPage = useStore($currentPageOfFilms)
    const setCurrentPage = useEvent(setCurrentPageOfFilms)
    const filmsArr = films.films.map(film => <CardFilm {...film} />)
    const pagesCount = films.pagesCount
    const path = useRouter().query.path
    const title = path === Object.keys(EGetTopOfFilms)[0] ? '250 лучших фильмов' : path === Object.keys(EGetTopOfFilms)[1] ? '100 самых популярных фильмов' : 'Самые ожидаемые фильмы'

    return (
        <>
            <ListOfFilms setCurrentPage={setCurrentPage} currentPage={currentPage} pagesCount={pagesCount} title={title}>{filmsArr}</ListOfFilms>
        </>

    )
}

export default TopFilms