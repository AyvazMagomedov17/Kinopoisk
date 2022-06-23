import { useEvent, useStore } from "effector-react"
import { useRouter } from "next/router"
import { IFilms } from "../../Interfaces/IFilms"
import { $currentPageOfFilms, setCurrentPageOfFilms } from "../../models/currentPageOfFilms"
import CardFilm from "../CardsFilms/CardFilm/CardFilm"
import ListOfFilms from "../common/ListOfFilms"
import { EType } from '../../Interfaces/enums/enums'
import { $filtres } from "../../models/filtres"
import { useEffect } from "react"


type Props = {
    films: IFilms
}

const Films = ({ films }: Props) => {
    const currentPage = useStore($currentPageOfFilms)


    const arr = films.items.map(item => <CardFilm year={item.year} ratingVoteCount={item.ratingImdb} rating={item.ratingKinopoisk} posterUrlPreview={item.posterUrlPreview} posterUrl={item.posterUrl} nameRu={item.nameRu} nameEn={item.nameEn} type={item.type} ratingKinopoisk={item.ratingKinopoisk} ratingImdb={item.ratingImdb} kinopoiskId={item.kinopoiskId} key={item.kinopoiskId} imdbId={item.imdbId} nameOriginal={item.nameOriginal} genres={item.genres} countries={item.countries} />)
    const query = useRouter().query
    const title = query.type == EType.FILM ? 'Фильмы' : query.type == EType.TV_SERIES ? 'Сериалы' : query.type == EType.TV_SHOW ? 'Тв-шоу' : query.type == EType.MINI_SERIES ? 'Мини-сериалы' : 'Все'
    const asPath = useRouter().asPath
    const router = useRouter()
    const page = Number(router.query.page)
    useEffect(() => {
        if (page)
            setCurrentPageOfFilms(page)
    }, [page])
    const setCurrentPage = (payload: number) => {
        const page = Number(router.query.page)

        router.replace(router.query.page ? asPath.replace(`page=${page}`, `page=${payload}`) : asPath + `?page=${payload}`)
    }
    return (
        <ListOfFilms title={title} pagesCount={films.totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>{arr}</ListOfFilms>
    )
}

export default Films