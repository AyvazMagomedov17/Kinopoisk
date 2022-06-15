import { Tab, Tabs } from '@mui/material';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import React from 'react'
import { EProfessionKey } from '../../../Interfaces/enums/EProfessionKey';
import { setCastFilterEv } from '../../../models/castFilter';
import { $tabs, changeFilmInfoTabsEv } from '../../../models/tabs';

type Props = {}

const FilmInfoTabs = (props: Props) => {
    const router = useRouter()
    const tabs = useStore($tabs).filmInfo

    const handleClickOnAwards = () => router.push(`${router.asPath}/awards`)
    const handleClickOnCast = () => {
        setCastFilterEv(EProfessionKey.UNKNOWN)
        router.push(`${router.asPath}/cast`)
    }
    const handleClickOnImages = () => router.push(`${router.asPath}/images`)
    const handleClickOnReviews = () => router.push(`${router.asPath}/reviews`)

    return (
        <Tabs indicatorColor='secondary' textColor='secondary' value={tabs}>
            <Tab label='Обзор' />
            <Tab onClick={handleClickOnAwards} label='Награды' />
            <Tab onClick={handleClickOnImages} label='Изображения' />
            <Tab onClick={handleClickOnCast} label='Cоздатели' />
            <Tab onClick={handleClickOnReviews} label='Рецензии' />




        </Tabs>
    )
}

export default FilmInfoTabs