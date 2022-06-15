import { Tab, Tabs } from '@mui/material'
import { useStore } from 'effector-react'
import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { $tabs, changeFilterEv } from '../../models/tabs'

type Props = {


    baseUrl?: string

}

const Filters = ({ baseUrl }: Props) => {
    const filtres = useStore($tabs).filtres
    const router = useRouter().pathname
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        changeFilterEv(newValue)
    };



    const handleClickOnTops = () => {
        setTimeout(() => {
            baseUrl ? Router.push(baseUrl + '/tops') : Router.push(router + '/tops')
        }, 200)
    }
    const handleClickOnGenres = () => {
        setTimeout(() => {
            baseUrl ? Router.push(baseUrl + '/genres') : Router.push(router + '/genres')
        }, 200)
    }
    const handleClickOnCountries = () => {
        setTimeout(() => {
            baseUrl ? Router.push(baseUrl + '/countries') : Router.push(router + '/countries')
        }, 200)
    }


    return (
        <Tabs sx={{ borderBottom: 1, borderColor: 'gray' }} value={filtres} onChange={handleChange}>
            <Tab onClick={handleClickOnTops} iconPosition='start' label='Подборки' />
            <Tab onClick={handleClickOnGenres} iconPosition='start' label='Жанры' />
            <Tab onClick={handleClickOnCountries} iconPosition='start' label='Страны' />
        </Tabs>
    )
}

export default Filters