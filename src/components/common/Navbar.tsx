import { Tab, Tabs } from '@mui/material'
import s from '../../styles/navbar.module.css'
import MovieIcon from '@mui/icons-material/Movie';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useStore } from 'effector-react';
import { $tabs, changeCategoriesEv, changeFilterEv } from '../../models/tabs';
import PersonIcon from '@mui/icons-material/Person';
import { GENRES, TOPS } from '../../paths/filmsPahts';
type Props = {}

const Navbar = ({ }: Props) => {
    const tabs = useStore($tabs)
    const asPath = useRouter().asPath

    useEffect(() => {
        if (asPath.includes('films')) {
            changeCategoriesEv('films')
        }
        if (asPath.includes('series')) {
            changeCategoriesEv('series')
        }
        if (asPath.includes('persons')) {
            changeCategoriesEv('persons')
        }
    }, [asPath])
    const handleClickOnFilms = () => {
        Router.push('/films/tops')
        setTimeout(() => {
            changeFilterEv(TOPS)

        }, 200);
    }
    const handleClickOnSeries = () => {
        Router.push('/series/genres')
        setTimeout(() => {
            changeFilterEv(GENRES)

        }, 200);
    }
    const handleClickOnPersons = () => {
        Router.push('/persons')

    }
    return (
        <div className={s.navbar}>
            <div className={s.content}>
                <nav className={s.menu}>
                    <Tabs sx={{ borderRight: 1, borderColor: 'gray' }} orientation='vertical' value={tabs.categories} aria-label="icon position tabs example">
                        <Tab value='films' onClick={handleClickOnFilms} icon={<MovieIcon />} iconPosition='start' label='Фильмы' />
                        <Tab value='series' onClick={handleClickOnSeries} icon={<CastConnectedIcon />} iconPosition='start' label='Сериалы' />
                        <Tab value='persons' onClick={handleClickOnPersons} icon={<PersonIcon />} iconPosition='start' label='Персоны' />
                    </Tabs>
                </nav>
            </div>
        </div>
    )
}

export default Navbar