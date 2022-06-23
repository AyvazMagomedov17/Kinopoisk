import { Box, Container } from "@mui/system"
import { useStore } from "effector-react"
import { useRouter } from "next/router"
import { IMainFilm } from "../../models/film"
import { $tabs } from "../../models/tabs"
import { AWARDS, CAST, IMAGES, REVIEWS } from "../../paths/filmPaths"
import Awards from "../Awards/Awards"
import Cast from "../Cast/Cast"
import FilmInfoMain from "../Film/FilmInfo/FilmInfoMain"
import Images from "../Images/Images"
import Reviews from "../Reviews/Reviews"
import Header from "./Header/Header"

type Props = {
    film: IMainFilm
}

const FilmIdPath = ({ film }: Props) => {
    const filmTabs = useStore($tabs).filmInfo
    const path = useRouter().query.path
    const child = path === CAST ? <Cast film={film.$film} staff={film.$staff} /> : path === AWARDS ? <Awards awards={film.$awards} film={film.$film} /> : path === REVIEWS ? <Reviews reviews={film.$reviews} film={film.$film} /> : path === IMAGES ? <Images images={film.$images} film={film.$film} /> : null
    return (
        <Box>
            <Header />
            <Container sx={{ 'marginTop': '50px', }} fixed>
                {child}
            </Container>
        </Box>
    )
}

export default FilmIdPath