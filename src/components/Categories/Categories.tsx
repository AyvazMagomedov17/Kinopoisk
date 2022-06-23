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
import { SERIES } from "../../paths/common"
import { EType } from "../../Interfaces/enums/enums"

type Props = {
    title: string
    baseUrl?: string

}

const Categories = ({ baseUrl, title }: Props) => {
    const genresCountries = useStore($genresCountriesList)
    const currentPage = useStore($currentPageOfFilms)
    const rout = useRouter()
    const router = useRouter().query.src
    const topCards = [<CardFilter key={0} link={'top250'} text="250 лучших фильмов" img='/tops/250.png' />, <CardFilter key={1} link={'top100'} text="100 лучших фильмов" img='/tops/100.jpg' />, <CardFilter key={3} link={'topawait'} text="Самые ожидаемые фильмы" img='/tops/await.jfif' />]
    const genres = genresCountries?.genres.map(genre => {
        if (genre.genre) {
            return <CardFilter text={genre.genre} link={`movies?page=${currentPage}&genres=${genre.id}&type=${baseUrl === SERIES ? EType.TV_SERIES : EType.ALL}`} img={`/genres/${genre.id}.png`} />
        }
    })
    const countries = genresCountries?.countries.map(country => {
        return <CardFilter key={country.id} text={country.country} link={`movies?page=1&countries=${country.id}&genres=null&type=${baseUrl === SERIES ? EType.TV_SERIES : EType.ALL}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=`} img={`/countries/${country.id}.png`} />

    })

    return (
        <MainLayout>
            <TitlePage  >{title}</TitlePage>
            <Filters baseUrl={baseUrl} />
            {router === 'tops' && < Cards items={topCards} />}
            {router === 'genres' && <Cards items={genres} />}
            {router === 'countries' && <Cards items={countries} />}

        </MainLayout>
    )
}



export default Categories