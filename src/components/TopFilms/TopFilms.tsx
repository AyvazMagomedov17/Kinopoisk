import { useEvent, useStore } from "effector-react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { EGetTopOfFilms } from "../../Interfaces/enums/enums"
import { IGenresCountriesList } from "../../Interfaces/IGenresCountriesList"
import { ITop } from "../../Interfaces/ITop"
import { $currentPageOfFilms, setCurrentPageOfFilms } from "../../models/currentPageOfFilms"
import CardFilm from "../CardsFilms/CardFilm/CardFilm"
import ListOfFilms from "../common/ListOfFilms"


type Props = {
    films: ITop
    genresCountriesList: IGenresCountriesList

}

const TopFilms = ({ films, genresCountriesList }: Props) => {
    const currentPage = useStore($currentPageOfFilms)
    const router = useRouter()
    const setCurrentPage = (payload: number) => {
        const page = Number(router.query.page)

        router.replace(router.query.page ? router.asPath.replace(`page=${page}`, `page=${payload}`) : router.asPath + `?page=${payload}`)
    }
    useEffect(() => {
        if (router.query.page)
            setCurrentPageOfFilms(Number(router.query.page))
    }, [router.query.page])
    const filmsArr = films.films.map(film => <CardFilm key={film.filmId} {...film} />)
    const pagesCount = films.pagesCount
    const path = useRouter().query.path
    const title = path === Object.keys(EGetTopOfFilms)[0] ? '250 лучших фильмов' : path === Object.keys(EGetTopOfFilms)[1] ? '100 самых популярных фильмов' : 'Самые ожидаемые фильмы'

    return (
        <>
            <ListOfFilms genresCountriesList={genresCountriesList} setCurrentPage={setCurrentPage} currentPage={currentPage} pagesCount={pagesCount} title={title}>{filmsArr}</ListOfFilms>
        </>

    )
}

export default TopFilms