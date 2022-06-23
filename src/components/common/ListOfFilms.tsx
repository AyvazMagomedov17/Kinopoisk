import { Button, Grid, useMediaQuery } from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import { useMaxWidthQuery } from "../../hooks/mediaQuery"
import FilterSelects from "./FilterSelects"
import FilterSelectsDrawer from "./FilterSelectsDrawer"
import Header from "./Header/Header"
import Paginator from "./Paginator"
import TitlePage from "./TitlePage"

type Props = {
    children: JSX.Element[]
    title: string,
    currentPage: number,
    setCurrentPage: (payload: number) => number | void,
    pagesCount: number
}

const ListOfFilms = ({ pagesCount, children, title, currentPage, setCurrentPage }: Props) => {
    const _900px = useMaxWidthQuery(900)
    const _370px = useMaxWidthQuery(370)
    const [filterSelectsDrawerIsOpen, setfilterSelectsDrawerIsOpen] = useState(false)
    const closeFilterSelectsDrawer = () => {
        setfilterSelectsDrawerIsOpen(false)
    }
    const openFilterSelectsDrawer = () => {
        setfilterSelectsDrawerIsOpen(true)
    }
    return (
        <Grid container>
            <Header />
            <Container sx={{ 'paddingTop': '40px', 'paddingBottom': '40px', }} fixed>
                <Grid gap={1} container>
                    <Grid container>

                        <Grid xs={_370px ? 6 : 4} item>
                            {_900px ? <Button onClick={openFilterSelectsDrawer} variant="outlined">Фильтр...</Button> : null}
                        </Grid>
                        <Grid xs={_370px ? 6 : 8} item><TitlePage>{title}</TitlePage></Grid>
                    </Grid>
                    {!_900px ? <Grid xs={2} item><FilterSelects /></Grid> : null}
                    <Grid xs={_900px ? 12 : 9} item>
                        <Grid container>
                            {children}
                        </Grid>
                    </Grid>
                    <Grid xs={4}></Grid>
                    <Grid xs={10} item>
                        <Grid justifyContent='center' container>
                            <Paginator pagesCount={pagesCount} setCurrentPage={setCurrentPage} currentPage={currentPage} /></Grid>
                    </Grid>
                </Grid>


            </Container>

            <FilterSelectsDrawer closeDrawer={closeFilterSelectsDrawer} isOpen={filterSelectsDrawerIsOpen} />



        </Grid>
    )
}

export default ListOfFilms