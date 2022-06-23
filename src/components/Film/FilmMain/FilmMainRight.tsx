import { ActionTypes } from "@mui/base"
import { Grid, Typography } from "@mui/material"
import { useStore } from "effector-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"
import { EBoxOfficeType } from "../../../Interfaces/enums/EBoxOfficeType"
import { EProfessionKey } from "../../../Interfaces/enums/EProfessionKey"
import { IFilm } from "../../../Interfaces/IFilm"
import { IStaff } from "../../../Interfaces/IStaff"
import { $boxOffice } from "../../../models/film"
import FilmMainBoxOffice from "./FilmMainBoxOffice"
import FilmMainLink from "./FilmMainLink"
import FilmMainRaitings from "./FilmMainRaitings"
import FilmRatingItem from "./FilmRatingItem"


type Props = {
    film: IFilm

}

const FilmMainRight = ({ film }: Props) => {

    const _900px = useMaxWidthQuery(900)

    return (
        <>
            <FilmMainRaitings film={film} />
            <FilmMainBoxOffice />


        </>
    )
}

export default FilmMainRight