import { Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
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
    const router = useRouter()
    const handleClick = () => {
        router.replace(router.query.page && router.query.order ? router.asPath.replace(`page=${1}&order=${router.query.order}`, `page=${1}&order=${type}`) : router.asPath + `?page=${1}&order=${type}`)
    }
    return (
        <Grid marginRight={3} item xs={2}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid xs={2}>
                            {image}
                        </Grid>
                        <Grid xs={10}>
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