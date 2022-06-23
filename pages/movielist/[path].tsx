import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Page404 from '../../src/components/common/Page404'
import Films from '../../src/components/Films/Films'
import TopFilms from '../../src/components/TopFilms/TopFilms'
import { EGetTopOfFilms, EType, ETypeRu } from '../../src/Interfaces/enums/enums'
import { IFilms } from '../../src/Interfaces/IFilms'
import { ISearchByKeyword } from '../../src/Interfaces/ISearchByKeyword'
import { ITop } from '../../src/Interfaces/ITop'
import TitleLayout from '../../src/layouts/TitleLayout'
import { $currentPageOfFilms, setCurrentPageOfFilms } from '../../src/models/currentPageOfFilms'
import { $films, getFilmsEf, removeFilmsEv } from '../../src/models/films'
import { $filtres } from '../../src/models/filtres'
import { $searchByKeywordFilms, getSearchByKeywordFilmsAt, setCurrentPageOfKeyword, setKeyword } from '../../src/models/searchByKeyword'
import { $topOfFilms, getTopOfFilmsEf } from '../../src/models/topOfFilms'

type Props = {
    films: ITop,
    filmi: IFilms,
    searchByKeywordFilms: ISearchByKeyword | null
}

const MovieList = ({ films, filmi, searchByKeywordFilms }: Props) => {

    const router = useRouter()
    const topsTitle = router.query.path === Object.keys(EGetTopOfFilms)[0] ? '250 лучших фильмов' : router.query.path === Object.keys(EGetTopOfFilms)[1] ? '100 популярных фильмов' : 'Топ ожидаемых фильмов'
    useEffect(() => {
        return function () {
            removeFilmsEv()
        }
    }, [])
    if (router.query.path === 'movies') {
        //@ts-ignore
        return <TitleLayout title={ETypeRu[router.query.type]}>
            <Films films={filmi} />
        </TitleLayout>

    }
    if (router.query.path === Object.keys(EGetTopOfFilms)[1] || router.query.path === Object.keys(EGetTopOfFilms)[0] || router.query.path === Object.keys(EGetTopOfFilms)[2]) {
        return <TitleLayout title={topsTitle}>
            <TopFilms films={films} />
        </TitleLayout>
    }
    if (router.query.path && router.query.path !== Object.keys(EGetTopOfFilms)[1] && router.query.path !== Object.keys(EGetTopOfFilms)[0] && router.query.path !== Object.keys(EGetTopOfFilms)[2] && router.query.path !== 'movies') {
        return <TitleLayout title='404 Страница не найдена'>
            <Page404 />
        </TitleLayout>
    }

}
export async function getServerSideProps({ query }: any) {
    const page = +query.page || 1
    if (query.path === 'movies') {

        await getFilmsEf({ page, filtres: { countries: +query.countries, genres: +query.genres, keyWord: query.keyword, yearFrom: +query.yearFrom, yearTo: +query.yearTo, ratingFrom: +query.ratingFrom, ratingTo: +query.ratingTo, type: query.type, order: query.order } })

    }
    /*  if (query.path === 'films') {
         if (query.searchByKeyword) {
 
             setKeyword(query.searchByKeyword)
         }
         if (query.page) {
             setCurrentPageOfKeyword(Number(query.page))
         }
         await getSearchByKeywordFilmsAt('')
     } */

    if (query.path === Object.keys(EGetTopOfFilms)[0]) {
        await getTopOfFilmsEf({ page: page, whatTop: EGetTopOfFilms.top250 })
    }
    if ((query.path === Object.keys(EGetTopOfFilms)[1])) {
        await getTopOfFilmsEf({ page: page, whatTop: EGetTopOfFilms.top100 })
    }
    if ((query.path === Object.keys(EGetTopOfFilms)[2])) {
        await getTopOfFilmsEf({ page: page, whatTop: EGetTopOfFilms.topawait })
    }
    return {
        props: {
            films: $topOfFilms.getState(),
            filmi: $films.getState(),
            searchByKeywordFilms: $searchByKeywordFilms.getState()

        }
    }

}

export default MovieList