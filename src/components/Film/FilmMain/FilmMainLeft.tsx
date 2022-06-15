import { Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import { useRouter } from "next/router"
import { EProfessionKey } from "../../../Interfaces/enums/EProfessionKey"
import { IAwards } from "../../../Interfaces/IAwards"
import { IFilm } from "../../../Interfaces/IFilm"
import { IStaff } from "../../../Interfaces/IStaff"
import { setCastFilterEv } from "../../../models/castFilter"
import FilmAwards from "./FilmAwards"
import FilmInfoItem from "./FilmInfoItem"
import FilmMainLink from "./FilmMainLink"
import FilmRatingItem from "./FilmRatingItem"

type Props = {
    film: IFilm
    awards: IAwards,
    staff: IStaff
}

const FilmMainLeft = ({ film, awards, staff }: Props) => {
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
                        <Link href={`/persons/${item.staffId}`}>
                            <Typography sx={{ cursor: 'pointer' }} fontSize={13} paddingTop={1}>{item.nameRu}</Typography>
                        </Link>
                    </FilmMainLink>



                )
            }
        }
    })
    return (
        <>
            <img src={film.posterUrl} />

            <FilmAwards awards={awards} />
            <FilmMainLink color='rgba(255, 255, 255, 1)'>
                <Link href={asPath + `/cast`}>

                    <Typography sx={{ cursor: 'pointer' }} paddingTop={4} variant="h5">
                        <span onClick={handleClickOnActors}>Актеры</span>
                    </Typography>
                </Link>
            </FilmMainLink>


            {actors}

        </>

    )
}

export default FilmMainLeft