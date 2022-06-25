import { useRouter } from 'next/router'
import React from 'react'
import FilmIdPath from '../../../src/components/common/FilmIdPath'
import Page404 from '../../../src/components/common/Page404'
import { IGenresCountriesList } from '../../../src/Interfaces/IGenresCountriesList'
import TitleLayout from '../../../src/layouts/TitleLayout'
import { $mainFilm, getAwardsAt, getFilmAt, getImagesAt, getReviewsAt, getStaffAt, IMainFilm, setFilmId, setImagesCurrentPage, setImagesFilter, setReviewsOrder, setReviewsPage } from '../../../src/models/film'
import { $genresCountriesList, getGenresCountriesListEf } from '../../../src/models/genresCountriesList'
import { AWARDS, CAST, IMAGES, REVIEWS } from '../../../src/paths/filmPaths'

type Props = {
    film: IMainFilm
    genresCountriesList: IGenresCountriesList
}

const Path = ({ film, genresCountriesList }: Props) => {
    const path = useRouter().query.path
    const title = path === AWARDS ? ' / Награды' : path === CAST ? ' / Создатели' : path === IMAGES ? ' / Изображения' : path === REVIEWS ? ' / Рецензии' : ''
    if (path && path !== CAST && path !== AWARDS && path !== IMAGES && path !== REVIEWS) {
        return <TitleLayout title='404 Страница не найдена'>
            <Page404 />
        </TitleLayout>
    }
    return (
        <>
            <TitleLayout title={`${film.$film.nameRu}${title}`}>
                <FilmIdPath genresCountriesList={genresCountriesList} film={film} />
            </TitleLayout>

        </>

    )
}

export async function getServerSideProps({ query }: any) {
    setFilmId(Number(query.filmId))

    await getFilmAt('')
    switch (query) {
        case CAST:
            await getStaffAt('')
            break
        case AWARDS:
            await getAwardsAt('')
            break
        case REVIEWS:

    }
    if (query.path === CAST) {
        await getStaffAt('')
    }
    if (query.path === AWARDS) {
        await getAwardsAt('')
    }
    if (query.path === REVIEWS) {
        if (query.order) {
            setReviewsOrder(query.order)
        }
        if (query.page) {
            setReviewsPage(Number(query.page))
        }
        await getReviewsAt('')
    }
    if (query.path === IMAGES) {
        if (query.type) {
            setImagesFilter(query.type)
        }
        if (query.page) {
            setImagesCurrentPage(Number(query.page))
        }
        await getImagesAt('')
    }
    await getGenresCountriesListEf()

    return {
        props: {
            film: $mainFilm.getState(),
            genresCountriesList: $genresCountriesList.getState()
        }
    }
}

export default Path