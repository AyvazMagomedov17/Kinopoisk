import Link from "next/link"
import { MainLayout } from "../src/layouts/Main.layout"
import axios from "axios";
import { useEffect } from "react";
import TitleLayout from "../src/layouts/TitleLayout";
import Categories from "../src/components/Categories/Categories";
import Router from "next/router";
import { $genresCountriesList, getGenresCountriesListEf } from "../src/models/genresCountriesList";
import { IGenresCountriesList } from "../src/Interfaces/IGenresCountriesList";
type Props = {
    genresCountriesList: IGenresCountriesList
}


const Index = ({ genresCountriesList }: Props) => {
    useEffect(() => {
        Router.replace('/films/tops')


    }, [])
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
export default Index