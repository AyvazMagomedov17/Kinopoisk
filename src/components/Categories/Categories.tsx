import { ITop } from "../../Interfaces/ITop"
import { MainLayout } from "../../layouts/Main.layout"
import TitlePage from "../common/TitlePage"
import { useRouter } from "next/router"
import CardFilter from "../CardsFilters/CardFilter/CardFilter"
import Filters from "../common/Filters"
import Cards from "../common/Cards"
import { useEffect } from "react"
import { $genresCountriesList, getGenrecCountriesListEf } from "../../models/genresCountriesList"
import { useStore } from "effector-react"
import { $currentPageOfFilms } from "../../models/currentPageOfFilms"

type Props = {

    baseUrl?: string

}

const Categories = ({ baseUrl }: Props) => {
    const genresCountries = useStore($genresCountriesList)
    const currentPage = useStore($currentPageOfFilms)
    const router = useRouter().query.src
    const countriesWithImage = [1, 3, 5, 6, 8, 9, 10, 11, 12, 13, 16, 17, 22, 23, 27, 33, 34, 44, 45, 49, 63]
    const topCards = [<CardFilter link={'top250'} text="250 лучших фильмов" img='/tops/250.png' />, <CardFilter link={'top100'} text="100 лучших фильмов" img='/tops/100.jpg' />, <CardFilter link={'topawait'} text="Самые ожидаемые фильмы" img='/tops/await.jfif' />]
    const genres = genresCountries?.genres.map(genre => {
        if (genre.genre) {
            return <CardFilter text={genre.genre} link={`movies?page=${currentPage}&genres=${genre.id}`} img={`/genres/${genre.id}.png`} />
        }
    })
    const countries = genresCountries?.countries.map(country => {
        return <CardFilter text={country.country} link={`movies?page=1&countries=${country.id}&genres=null&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=`} img={`/countries/${country.id}.png`} />

    })

    return (
        <MainLayout>
            <TitlePage>Фильмы</TitlePage>
            <Filters baseUrl={baseUrl} />
            {router === 'tops' && <Cards items={topCards} />}
            {router === 'genres' && <Cards items={genres} />}
            {router === 'countries' && <Cards items={countries} />}

        </MainLayout>
    )
}



export default Categories