import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Film from '../../src/components/Film/Film'
import { IBoxOffice } from '../../src/Interfaces/IBoxOffice'
import { $boxOffice, $filmId, $mainFilm, getAwardsAt, getBoxOfficeAt, getFactsAboutFilmAt, getFilmAt, getReviewsAt, getSimilarsAt, getStaffAt, IMainFilm, setFilmId } from '../../src/models/film'

type Props = {
    film: IMainFilm,

}
const FilmId = ({ film }: Props) => {

    const router = useRouter()
    useEffect(() => {
        setFilmId(Number(router.query.filmId))
    }, [])
    return (
        <>

            <Film film={film} />

        </>

    )
}

export async function getServerSideProps({ query }: any) {
    setFilmId(Number(query.filmId))
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
}

export default FilmId