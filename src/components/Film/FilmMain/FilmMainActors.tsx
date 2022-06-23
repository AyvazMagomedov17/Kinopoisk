import { Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"
import { EProfessionKey } from "../../../Interfaces/enums/EProfessionKey"
import { IStaff } from "../../../Interfaces/IStaff"
import { setCastFilterEv } from "../../../models/castFilter"
import FilmMainLink from "./FilmMainLink"

type Props = {
    staff: IStaff
}

const FilmMainActors = ({ staff }: Props) => {
    const _450px = useMaxWidthQuery(450)
    const handleClickOnActors = () => {
        setCastFilterEv(EProfessionKey.ACTOR)
    }
    const actors: any[] = []
    const asPath = useRouter().asPath
    staff.forEach(item => {
        if (actors.length < (_450px ? 5 : 10)) {
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
        <>
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

export default FilmMainActors