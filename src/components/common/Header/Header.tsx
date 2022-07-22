import { AppBar, Button, FilledInput, Grid, Input, InputLabel, Toolbar } from "@mui/material"
import { Container } from "@mui/system"
import { useStore } from "effector-react"
import { Formik } from "formik"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/router"
import { useState } from "react"
import { $currentPageOfFilms } from "../../../models/currentPageOfFilms"
import MenuDrawer from "./MenuDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"
import SearchIcon from '@mui/icons-material/Search';
import FilterSelectsDrawer from "../FilterSelectsDrawer"
import { IGenresCountriesList } from "../../../Interfaces/IGenresCountriesList"
type Props = {
    genresCountriesList: IGenresCountriesList

}

const Header = ({ genresCountriesList }: Props) => {
    const _1200px = useMaxWidthQuery(1200)
    const _550px = useMaxWidthQuery(550)
    const _480px = useMaxWidthQuery(480)
    const _375px = useMaxWidthQuery(375)
    const _900px = useMaxWidthQuery(900)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false)
    const router = useRouter()
    const currentPage = useStore($currentPageOfFilms)
    const handleClickOnLogo = () => {

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
        setIsSearchDrawerOpen(true)
    }
    const closeSearchDrawer = () => setIsSearchDrawerOpen(false)
    return (
        <>
            <AppBar sx={{ 'backgroundColor': '#1f1f1f', height: '70px', 'display': 'flex', justifyContent: 'center' }} position="sticky">
                <Container fixed>
                    <Toolbar tabIndex={1} >
                        <Grid alignItems='center' container>
                            <Grid item xs={_480px ? 8 : 5}>
                                <a  >

                                    <img onClick={handleClickOnLogo} style={{ 'maxWidth': _375px ? '120px' : _550px ? '150px' : _1200px ? '200px' : '300px', 'cursor': 'pointer' }} src='/header/logo.svg' />

                                </a>
                            </Grid>
                            <Grid item xs={_480px ? 2 : 6}>
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
                                    }} value={values.keyword} name="keyword" color="warning" placeholder="Поиск фильмов" fullWidth={true} sx={{ height: '40px', borderRadius: '10px', 'paddingBottom': '10px', 'color': 'white', 'backgroundColor': '#272d36' }} />
                                )}</Formik>
                                }


                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{
                                    'transition': 'all 0.3s',
                                    '&:hover': {
                                        "transform": 'scale(1.1)',
                                        'transition': 'all 0.3s'
                                    }
                                }} size="large" color="error" onClick={openTheDrawer}><MenuIcon fontSize="large" /></Button>
                            </Grid>


                        </Grid>

                        <MenuDrawer closeDrawer={closeDrawer} isOpen={isDrawerOpen} />
                    </Toolbar>
                </Container>
            </AppBar>
            <FilterSelectsDrawer isFromMovieList={false} genresCountriesList={genresCountriesList} closeDrawer={closeSearchDrawer} isOpen={isSearchDrawerOpen} />
        </>



    )
}

export default Header