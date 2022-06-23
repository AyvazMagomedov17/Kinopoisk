import { useStore } from 'effector-react'
import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Page404 from '../../src/components/common/Page404'
import Preloader from '../../src/components/common/Preloader'
import Film from '../../src/components/Film/Film'
import { IBoxOffice } from '../../src/Interfaces/IBoxOffice'
import TitleLayout from '../../src/layouts/TitleLayout'
import { $boxOffice, $filmId, $mainFilm, getAwardsAt, getBoxOfficeAt, getFactsAboutFilmAt, getFilmAt, getReviewsAt, getSimilarsAt, getStaffAt, IMainFilm, setFilmId } from '../../src/models/film'

type Props = {
    film: IMainFilm,
    ers: any


}
const FilmId = ({ film, ers }: Props) => {

    const router = useRouter()
    useEffect(() => {
        setFilmId(Number(router.query.filmId))
    }, [])
    if (!film) {
        return <Page404 />
    }
    if (film) {
        return (
            <>
                <TitleLayout title={`Фильм / ${film.$film.nameRu || film.$film.nameEn}`}>
                    <Film film={film} />
                </TitleLayout>



            </>

        )
    }





}

export async function getServerSideProps({ query }: any) {
    setFilmId(Number(query.filmId))

    try {
        await getFilmAt('')
        await getStaffAt('')
        await getAwardsAt('')
        await getSimilarsAt('')
        await getFactsAboutFilmAt('')
        await getReviewsAt(1)
        return {
            props: {
                film: $mainFilm.getState(),

            }
        }
    } catch (error) {
        return {
            props: {
                error: {
                    ers: 'fd'
                }

            }
        }
    }



}

export default FilmId