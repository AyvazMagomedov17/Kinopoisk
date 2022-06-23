import { AppBar, Box, Button, FilledInput, Grid, Input, InputLabel, Toolbar } from "@mui/material"
import { Container } from "@mui/system"
import { useStore } from "effector-react"
import { Formik } from "formik"

import Router, { useRouter } from "next/router"
import { useState } from "react"
import { $currentPageOfFilms } from "../../../models/currentPageOfFilms"
import s from '../../../styles/header.module.css'
import MenuDrawer from "./MenuDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import { changeCategoriesEv, changeFilterEv } from "../../../models/tabs"
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"
import SearchIcon from '@mui/icons-material/Search';
type Props = {}

const Header = (props: Props) => {
    const _1200px = useMaxWidthQuery(1200)
    const _550px = useMaxWidthQuery(550)
    const _480px = useMaxWidthQuery(480)
    const _375px = useMaxWidthQuery(375)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const router = useRouter()
    const currentPage = useStore($currentPageOfFilms)
    const handleClickOnLogo = () => {
        changeFilterEv(0)
        changeCategoriesEv(0)
        setTimeout(() => {
            router.push('/films/tops')
        }, 10);
    }
    const openTheDrawer = () => {
        setIsDrawerOpen(true)
    }
    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }
    const handleClickOnFind = () => {
        Router.push('/movielist/movies?page=1&countries=null&genres=null&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=&order=NUM_VOTE')
    }
    return (

        <AppBar sx={{ 'backgroundColor': '#1f1f1f', height: '70px', 'display': 'flex', justifyContent: 'center' }} position="sticky">
            <Container fixed>
                <Toolbar tabIndex={1} >
                    <Grid alignItems='center' container>
                        <Grid item xs={_480px ? 8 : 6}>
                            <a onClick={handleClickOnLogo}>

                                <img style={{ 'maxWidth': _375px ? '120px' : _550px ? '150px' : _1200px ? '200px' : '300px' }} src='/header/logo.svg' />

                            </a>
                        </Grid>
                        <Grid item xs={_480px ? 2 : 5}>
                            {_480px ? <button onClick={handleClickOnFind}><SearchIcon color="warning" fontSize='large' /></button> : <Formik initialValues={
                                {
                                    keyword: ''
                                }
                            } onSubmit={(values) => {
                                router.push(`/movielist/movies?page=${currentPage}&keyword=${values.keyword}`)
                            }}>{({ values, handleChange, handleSubmit, }) => (
                                <FilledInput onChange={handleChange} onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        handleSubmit()
                                    }
                                }} value={values.keyword} name="keyword" color="success" placeholder="Поиск фильмов" fullWidth={true} className={s.input} sx={{ height: '40px', borderRadius: '10px', 'paddingBottom': '10px', }} />
                            )}</Formik>
                            }


                        </Grid>
                        <Grid item xs={1}>
                            <Button size="large" color="error" onClick={openTheDrawer}><MenuIcon fontSize="large" /></Button>
                        </Grid>

                    </Grid>

                    <MenuDrawer closeDrawer={closeDrawer} isOpen={isDrawerOpen} />
                </Toolbar>
            </Container>
        </AppBar>


    )
}

export default Header