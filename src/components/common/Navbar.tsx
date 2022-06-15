import { Tab, Tabs } from '@mui/material'
import s from '../../styles/navbar.module.css'
import MovieIcon from '@mui/icons-material/Movie';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import React, { useEffect } from 'react';
import Router from 'next/router';
import { useStore } from 'effector-react';
import { $tabs, changeCategoriesEv, changeFilterEv } from '../../models/tabs';
type Props = {}

const Navbar = (props: Props) => {
    const tabs = useStore($tabs)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {

        changeCategoriesEv(newValue);
    };

    const handleClickOnFilms = () => {
        Router.push('/categories')
        setTimeout(() => {
            changeFilterEv(0)

        }, 200);
    }
    return (
        <div className={s.navbar}>
            <div className={s.content}>
                <nav className={s.menu}>
                    <Tabs sx={{ borderRight: 1, borderColor: 'gray' }} orientation='vertical' value={tabs.categories} onChange={handleChange} aria-label="icon position tabs example">
                        <Tab onClick={handleClickOnFilms} icon={<MovieIcon />} iconPosition='start' label='Фильмы' />
                        <Tab icon={<CastConnectedIcon />} iconPosition='start' label='Сериалы' />
                    </Tabs>
                </nav>
            </div>
        </div>
    )
}

export default Navbar