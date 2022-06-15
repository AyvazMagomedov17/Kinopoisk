import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Films from '../../src/components/Films/Films'
import TopFilms from '../../src/components/TopFilms/TopFilms'
import { EGetTopOfFilms, EType } from '../../src/Interfaces/enums/enums'
import { IFilms } from '../../src/Interfaces/IFilms'
import { ITop } from '../../src/Interfaces/ITop'
import { $currentPageOfFilms, setCurrentPageOfFilms } from '../../src/models/currentPageOfFilms'
import { $films, getFilmsEf, removeFilmsEv } from '../../src/models/films'
import { $filtres } from '../../src/models/filtres'
import { $topOfFilms, getTopOfFilmsEf } from '../../src/models/topOfFilms'

type Props = {
    films: ITop,
    filmi: IFilms
}

const MovieList = ({ films, filmi }: Props) => {
    const currentPage = useStore($currentPageOfFilms)
    const asPath = useRouter().asPath
    const router = useRouter()
    const filtres = useStore($filtres)
    const query = useRouter().query


    useEffect(() => {
        const page = Number(router.query.page)
        router.replace(router.query.page ? asPath.replace(`page=${page}`, `page=${currentPage}`) : asPath + `?page=${currentPage}`, undefined, { locale: 'fdf' })
    }, [currentPage])
    useEffect(() => {
        setCurrentPageOfFilms(1)

    }, [])
    useEffect(() => {
        if (filtres) {
            router.replace(`movies?page=${currentPage}&countries=${filtres.countries}&genres=${filtres.genres}&type=${filtres.type}&ratingFrom=${filtres.ratingFrom}&ratingTo=${filtres.ratingTo}&yearFrom=${filtres.yearFrom}&yearTo=${filtres.yearTo}&keyword=${filtres.keyWord}`)
        }


    }, [filtres])
    useEffect(() => {
        return function () {
            removeFilmsEv()
        }
    }, [])
    if (router.query.path === 'movies') {
        return <Films films={filmi} />
    }
    if (router.query.path === Object.keys(EGetTopOfFilms)[1] || router.query.path === Object.keys(EGetTopOfFilms)[0] || router.query.path === Object.keys(EGetTopOfFilms)[2]) {
        return <TopFilms films={films} />
    }
    return (
        <>

            <>genre</>

        </>

    )
}
export async function getServerSideProps({ query }: any) {
    const page = +query.page || 1
    if (query.path === 'movies') {
        await getFilmsEf({ page, filtres: { countries: +query.countries, genres: +query.genres, keyWord: query.keyword, yearFrom: +query.yearFrom, yearTo: +query.yearTo, ratingFrom: +query.ratingFrom, ratingTo: +query.ratingTo, type: query.type } })

    }

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
            filmi: $films.getState()

        }
    }

}

export default MovieList