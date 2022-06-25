import { Typography } from "@mui/material"
import { useStore } from "effector-react"
import { EBoxOfficeType } from "../../../Interfaces/enums/EBoxOfficeType"
import { IBoxOffice } from "../../../Interfaces/IBoxOffice"
import { $boxOffice } from "../../../models/film"
import FilmRatingItem from "./FilmRatingItem"

type Props = {
    boxOffice: IBoxOffice
}

const FilmMainBoxOffice = ({ boxOffice }: Props) => {

    const boxOfficeInfo = boxOffice?.total ? boxOffice?.items.map(item => <FilmRatingItem key={item.name} color="white" fz={18} info={item.amount.toLocaleString('ru') + ' ' + item.symbol} title={item.type === EBoxOfficeType.BUDGET ? 'Бюджет' : item.type === EBoxOfficeType.MARKETING ? 'Затраты на рекламу' : item.type === EBoxOfficeType.USA ? 'Сборы в США' : item.type === EBoxOfficeType.RUS ? 'Сборы в России' : 'Мировые сборы'} />) : null
    return (
        <>
            {boxOffice?.total ? <Typography paddingTop={4} variant="h5">Бюджет и сборы</Typography> : null}
            {boxOfficeInfo}
        </>
    )
}

export default FilmMainBoxOffice