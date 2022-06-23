import { Card, CardActionArea, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"
import { IPersonFilm } from "../../../Interfaces/IPerson"

type Props = {
    film: IPersonFilm
}

const FilmNameItem = ({ description, filmId, general, nameEn, nameRu, professionKey, rating }: IPersonFilm) => {
    const _900px = useMaxWidthQuery(900)
    const _550px = useMaxWidthQuery(570)
    const _485px = useMaxWidthQuery(490)
    const _430px = useMaxWidthQuery(430)
    const _360px = useMaxWidthQuery(360)
    const router = useRouter()
    const handleClick = () => {
        router.push(`/film/${filmId}`)
    }
    return (
        <Grid marginBottom={2} item xs={12}>
            <Card onClick={handleClick} sx={{ 'minHeight': '120px', maxWidth: '900px', 'color': 'white', 'boxShadow': 'none', 'backgroundColor': 'rgba(26, 25, 26, 0.92)', 'border': '1px solid white', 'borderRadius': '20px' }}>
                <CardActionArea sx={{ 'padding': '20px', 'minHeight': '120px', 'cursor': 'pointer' }}>
                    <Grid container>
                        <Grid item xs={_900px ? 8 : 7}>
                            <Typography sx={{ 'maxWidth': _360px ? '150px' : _430px ? '190px' : _485px ? '230px' : _900px ? '270px' : 'auto', 'wordBreak': 'break-word' }} fontSize={_485px ? 14 : _550px ? 16 : 17} fontWeight={900} >{nameRu || nameEn}</Typography>
                            {nameRu ? <Typography fontSize={_485px ? 13 : _550px ? 14 : 15} sx={{ 'maxWidth': _360px ? '150px' : _430px ? '190px' : _485px ? '230px' : _900px ? '270px' : 'auto', 'wordBreak': 'break-word' }} >{nameEn}</Typography> : null}

                        </Grid>
                        <Grid item xs={4}>
                            <Typography fontSize={_360px ? 13 : _485px ? 14 : _550px ? 16 : 17}>{description}</Typography>
                            <Typography fontSize={_485px ? 17 : _550px ? 19 : 20} fontWeight={700} color='green'>{rating}</Typography>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default FilmNameItem