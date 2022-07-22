import { Tab, Tabs } from '@mui/material';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import React from 'react'
import { useMaxWidthQuery } from '../../../hooks/mediaQuery';
import { EProfessionKey } from '../../../Interfaces/enums/EProfessionKey';
import { setCastFilterEv } from '../../../models/castFilter';
import { $tabs, changeFilmInfoTabsEv } from '../../../models/tabs';

type Props = {}

const FilmInfoTabs = (props: Props) => {

    const _587px = useMaxWidthQuery(587)
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
        <Tabs
            variant="scrollable"
            scrollButtons="auto" indicatorColor='secondary' textColor='secondary' value={tabs}>
            <Tab sx={{
                'transition': 'all 0.3s',
                '&:hover': {
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.3s'
                }
            }} label='Обзор' />
            <Tab sx={{
                'transition': 'all 0.3s',
                '&:hover': {
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.3s'
                }
            }} onClick={handleClickOnAwards} label='Награды' />
            <Tab sx={{
                'transition': 'all 0.3s',
                '&:hover': {
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.3s'
                }
            }} onClick={handleClickOnImages} label='Изображения' />
            <Tab sx={{
                'transition': 'all 0.3s',
                '&:hover': {
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.3s'
                }
            }} onClick={handleClickOnCast} label='Cоздатели' />
            <Tab sx={{
                'transition': 'all 0.3s',
                '&:hover': {
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.3s'
                }
            }} onClick={handleClickOnReviews} label='Рецензии' />
        </Tabs>
    )
}

export default FilmInfoTabs