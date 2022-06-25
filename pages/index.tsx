import Link from "next/link"
import { MainLayout } from "../src/layouts/Main.layout"
import axios from "axios";
import { useEffect } from "react";
import TitleLayout from "../src/layouts/TitleLayout";
import Categories from "../src/components/Categories/Categories";
import Router from "next/router";
import { getGenrecCountriesListEf } from "../src/models/genresCountriesList";
type Props = {}


const Index = ({ }: Props) => {
    useEffect(() => {
        Router.replace('/films/tops')


    }, [])
    return (
        <>
            <TitleLayout title='Фильмы'>
                <Categories title='Фильмы' baseUrl='/films' />
            </TitleLayout>



        </>

    )
}

export default Index