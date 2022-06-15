import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useStore } from "effector-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { EProfessionKey, EProfessionKeyRu } from "../../Interfaces/enums/EProfessionKey"
import { IFilm } from "../../Interfaces/IFilm"
import { IStaff } from "../../Interfaces/IStaff"
import { $castFilter, setIsOnCastPage } from "../../models/castFilter"
import { $staff } from "../../models/film"
import FilmIdPath from "../common/FilmIdPath"
import FilmIdPathTitle from "../common/FilmIdPathTitle"
import Header from "../common/Header"
import TitlePage from "../common/TitlePage"
import CastFIlter from "./CastFIlter"
import CastItems from "./CastItems"

type Props = {
    staff: IStaff
    film: IFilm
}

const Cast = ({ staff, film }: Props) => {
    const castFilter = useStore($castFilter)
    const cast = useStore($staff)
    const [localStaff, setLocalStaff] = useState<IStaff>(staff)


    useEffect(() => {
        if (castFilter !== EProfessionKey.UNKNOWN) {
            setLocalStaff(staff?.filter(item => {
                return item.professionKey === castFilter
            }))
        } else {
            setLocalStaff(staff)
        }
    }, [castFilter])
    const castFilterTitle = castFilter === EProfessionKey.ACTOR ? EProfessionKeyRu.ACTOR : castFilter === EProfessionKey.COMPOSER ? EProfessionKeyRu.COMPOSER : castFilter === EProfessionKey.DESIGN ? EProfessionKeyRu.DESIGN : castFilter === EProfessionKey.DIRECTOR ? EProfessionKeyRu.DIRECTOR : castFilter === EProfessionKey.EDITOR ? EProfessionKeyRu.EDITOR : castFilter === EProfessionKey.OPERATOR ? EProfessionKeyRu.OPERATOR : castFilter === EProfessionKey.PRODUCER ? EProfessionKeyRu.PRODUCER : castFilter === EProfessionKey.TRANSLATOR ? EProfessionKeyRu.TRANSLATOR : castFilter === EProfessionKey.VOICE_DIRECTOR ? EProfessionKeyRu.VOICE_DIRECTOR : castFilter === EProfessionKey.WRITER ? EProfessionKeyRu.WRITER : 'Все'

    const styles = {
        background: {
            'backgroundColor': 'rgba(51, 50, 49, 1)',
            'minHeight': '100vh',
            'minWidth': '100vw'
        }
    }
    useEffect(() => {
        return function () {
            setIsOnCastPage(false)
        }
    }, [])
    return (
        <>

            <Grid paddingTop={1} container justifyContent='space-between' alignItems='center'>
                <FilmIdPathTitle film={film} descrition={castFilterTitle} />
                <CastFIlter />
            </Grid>
            <CastItems staff={localStaff} />
        </>

    )
}

export default Cast