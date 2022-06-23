import { useRouter } from 'next/router'
import React from 'react'
import Categories from '../../src/components/Categories/Categories'
import Page404 from '../../src/components/common/Page404'
import TitleLayout from '../../src/layouts/TitleLayout'
import { COUNTRIES, GENRES, TOPS } from '../../src/paths/filmsPahts'

type Props = {

}

const MoviePage = ({ }: Props) => {

    return (
        <>
            <TitleLayout title='Фильмы'>
                <Categories title='Фильмы' baseUrl='/films' />
            </TitleLayout>



        </>
    )
}

export default MoviePage