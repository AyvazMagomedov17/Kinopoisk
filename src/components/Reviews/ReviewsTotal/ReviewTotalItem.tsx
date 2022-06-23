import { Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"
import { EReviewsSortType } from "../../../Interfaces/enums/EReviewsSortType"
import { setReviewsOrder } from '../../../models/film'
import FilmMainLink from "../../Film/FilmMain/FilmMainLink"
type Props = {
    image: any
    title: string,
    count: number
    type?: EReviewsSortType
}

const ReviewTotalItem = ({ image, title, count, type = EReviewsSortType.DATE_DESC }: Props) => {
    const _900px = useMaxWidthQuery(900)
    const _580px = useMaxWidthQuery(580)
    const _425px = useMaxWidthQuery(425)
    const router = useRouter()
    const handleClick = () => {

        router.replace(router.query.page && router.query.order ? router.asPath.replace(`page=${1}&order=${router.query.order}`, `page=${1}&order=${type}`) : router.asPath + `?page=${1}&order=${type}`)
    }
    return (
        <Grid marginBottom={2} marginRight={_900px ? 11 : 7} item xs={_425px ? 12 : _900px ? 3 : 2}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid xs={_425px ? 2 : _900px ? 3 : 2}>
                            {image}
                        </Grid>
                        <Grid xs={_900px ? 9 : 10}>
                            <button onClick={handleClick}>

                                <FilmMainLink color='rgba(0, 0, 0, 1)'>
                                    <Typography sx={{ 'cursor': 'pointer' }} fontStyle='italic'>
                                        {title}

                                    </Typography>
                                </FilmMainLink>

                            </button>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {count}
                    </Grid>

                </Grid>
            </Grid>
        </Grid>

    )
}

export default ReviewTotalItem