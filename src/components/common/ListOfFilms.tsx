import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import FilterSelects from "./FilterSelects"
import Header from "./Header"
import Paginator from "./Paginator"
import TitlePage from "./TitlePage"

type Props = {
    children: JSX.Element[]
    title: string,
    currentPage: number,
    setCurrentPage: (payload: number) => number,
    pagesCount: number
}

const ListOfFilms = ({ pagesCount, children, title, currentPage, setCurrentPage }: Props) => {
    return (
        <Grid container>
            <Grid xs={12} item><Header /></Grid>
            <Container sx={{ 'paddingTop': '40px', 'paddingBottom': '40px' }} fixed>
                <Grid gap={1} container>
                    <Grid container>
                        <Grid xs={2.5} item></Grid>
                        <Grid xs={6} item><TitlePage>{title}</TitlePage></Grid>
                    </Grid>
                    <Grid xs={2} item><FilterSelects /></Grid>
                    <Grid xs={9} item>{children}</Grid>
                    <Grid xs={4}></Grid>
                    <Grid xs={6} item><Paginator pagesCount={pagesCount} setCurrentPage={setCurrentPage} currentPage={currentPage} /></Grid>
                </Grid>

            </Container>



        </Grid>
    )
}

export default ListOfFilms