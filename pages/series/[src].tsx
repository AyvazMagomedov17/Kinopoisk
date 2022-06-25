import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Categories from "../../src/components/Categories/Categories"
import Page404 from "../../src/components/common/Page404"
import { IGenresCountriesList } from "../../src/Interfaces/IGenresCountriesList"
import TitleLayout from "../../src/layouts/TitleLayout"
import { $genresCountriesList, getGenresCountriesListEf } from "../../src/models/genresCountriesList"
import { COUNTRIES, GENRES, TOPS } from "../../src/paths/filmsPahts"

type Props = {
    genresCountriesList: IGenresCountriesList
}

const Series = ({ genresCountriesList }: Props) => {
    const src = useRouter().query.src



    if (src && src !== GENRES && src !== COUNTRIES) {
        return <TitleLayout title='404 Страница не найдена'>
            <Page404 />
        </TitleLayout>
    }
    return (
        <TitleLayout title="Сериалы">
            <Categories genresCountriesList={genresCountriesList} title="Сериалы" baseUrl="/series" />
        </TitleLayout>

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
export default Series