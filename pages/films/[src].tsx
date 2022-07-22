

import React from 'react'
import Categories from '../../src/components/Categories/Categories'
import { IGenresCountriesList } from '../../src/Interfaces/IGenresCountriesList'
import TitleLayout from '../../src/layouts/TitleLayout'
import { $genresCountriesList, getGenresCountriesListEf } from '../../src/models/genresCountriesList'

type Props = {
    genresCountriesList: IGenresCountriesList
}

const MoviePage = ({ genresCountriesList }: Props) => {

    return (
        <>
            <TitleLayout title='Фильмы'>
                <Categories genresCountriesList={genresCountriesList} title='Фильмы' baseUrl='/films' />
            </TitleLayout>



        </>
    )
}
export async function getServerSideProps({ query }: any) {
    await getGenresCountriesListEf()
    return {
        props: {
            genresCountriesList: $genresCountriesList.getState()
        }
    }
}
export default MoviePage