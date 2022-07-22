import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Page404 from '../../src/components/common/Page404'
import Film from '../../src/components/Film/Film'
import TitleLayout from '../../src/layouts/TitleLayout'
import { getFavoriteFilmFx, I$favoriteFilm, resetFavoriteFilmEv } from '../../src/models/favoriteFilms'
import { $mainFilm, getAwardsAt, getBoxOfficeAt, getFactsAboutFilmAt, getFilmAt, getReviewsAt, getSeasonsAt, getSimilarsAt, getStaffAt, IMainFilm, setFilmId } from '../../src/models/film'
import { $user } from '../../src/models/user'

type Props = {
    film: IMainFilm,
    ers: any
    favoriteFilm: I$favoriteFilm


}
const FilmId = ({ film, }: Props) => {
    const user = useStore($user)
    const query = useRouter().query
    const router = useRouter()
    useEffect(() => {
        if (user?.isAuth) {
            getFavoriteFilmFx({ kinopoiskId: Number(query.filmId) })
        }
    }, [user?.isAuth])
    useEffect(() => {

        setFilmId(Number(router.query.filmId))
        return function () {
            resetFavoriteFilmEv()
        }
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
        await getSeasonsAt('')
        await getBoxOfficeAt('')

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