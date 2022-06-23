import { Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMaxWidth900 } from "../../../hooks/mediaQuery"
import { EProfessionKey } from "../../../Interfaces/enums/EProfessionKey"
import { IAwards } from "../../../Interfaces/IAwards"
import { IFilm } from "../../../Interfaces/IFilm"
import { IStaff } from "../../../Interfaces/IStaff"
import { setCastFilterEv } from "../../../models/castFilter"
import FilmAwards from "./FilmAwards"
import FilmInfoItem from "./FilmInfoItem"
import FilmMainActors from "./FilmMainActors"
import FilmMainLink from "./FilmMainLink"
import FilmRatingItem from "./FilmRatingItem"

type Props = {
    film: IFilm
    awards: IAwards,
    staff: IStaff
}

const FilmMainLeft = ({ film, awards, staff }: Props) => {
    const _900px = useMaxWidth900()
    const handleClickOnActors = () => {
        setCastFilterEv(EProfessionKey.ACTOR)
    }
    const actors: any[] = []
    const asPath = useRouter().asPath
    staff.forEach(item => {
        if (actors.length < 10) {
            if (item.professionKey === EProfessionKey.ACTOR) {
                actors.push(

                    <FilmMainLink key={item.staffId}>
                        <Link href={`/name/${item.staffId}`}>
                            <Typography sx={{ cursor: 'pointer' }} fontSize={13} paddingTop={1}>{item.nameRu}</Typography>
                        </Link>
                    </FilmMainLink>



                )
            }
        }
    })
    return (
        <Grid container flexDirection='column' alignItems='center'>
            <img style={{ 'marginBottom': '20px' }} src={film.posterUrl} />

            {!_900px && <>
                <FilmAwards awards={awards} />
                <FilmMainActors staff={staff} />
            </>}

        </Grid>

    )
}

export default FilmMainLeft