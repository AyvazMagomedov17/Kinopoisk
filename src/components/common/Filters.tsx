import { Tab, Tabs } from '@mui/material'
import { useStore } from 'effector-react'
import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { $tabs, changeFilterEv } from '../../models/tabs'
import { SERIES } from '../../paths/common'
import { COUNTRIES, GENRES, TOPS } from '../../paths/filmsPahts'

type Props = {


    baseUrl?: string

}

const Filters = ({ baseUrl }: Props) => {
    const filtres = useStore($tabs).filtres
    const router = useRouter().pathname

    const src = useRouter().query.src
    useEffect(() => {
        changeFilterEv(String(src))
    }, [src])



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
        <Tabs sx={{ borderBottom: 1, borderColor: 'gray' }} value={filtres}>
            {baseUrl !== SERIES && < Tab sx={{
                "transition": 'all 0.3s',
                "&:hover": {
                    'transform': 'scale(1.1)',

                }
            }} value={TOPS} onClick={handleClickOnTops} iconPosition='start' label='Подборки' />}
            <Tab sx={{
                "transition": 'all 0.3s',
                "&:hover": {
                    'transform': 'scale(1.1)',

                }
            }} value={GENRES} onClick={handleClickOnGenres} iconPosition='start' label='Жанры' />
            <Tab sx={{
                "transition": 'all 0.3s',
                "&:hover": {
                    'transform': 'scale(1.1)',

                }
            }} value={COUNTRIES} onClick={handleClickOnCountries} iconPosition='start' label='Страны' />
        </Tabs>
    )
}

export default Filters