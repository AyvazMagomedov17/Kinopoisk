import { Grid } from "@mui/material"
import { useStore } from "effector-react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { IFilm } from "../../Interfaces/IFilm"
import { IReviews } from "../../Interfaces/IReviews"
import { $reviewsFiltres, $reviewsPage, setReviewsPage } from "../../models/film"
import FilmIdPathTitle from "../common/FilmIdPathTitle"
import Paginator from "../common/Paginator"
import FilmInfoReviewItem from "../Film/FilmInfo/FilmInfoReviews/FilmInfoReviewItem"
import ReviewsFilter from "./ReviewsFilter"
import ReviewsTotal from "./ReviewsTotal/ReviewsTotal"


type Props = {
    film: IFilm
    reviews: IReviews
}

const Reviews = ({ film, reviews }: Props) => {
    const reviewsFiltres = useStore($reviewsFiltres)
    const router = useRouter()
    const page = router.query.page
    const order = router.query.order
    useEffect(() => {

        router.replace(router.query.page && router.query.order ? router.asPath.replace(`page=${page}&order=${order}`, `page=${reviewsFiltres.$reviewsPage}&order=${reviewsFiltres.$reviewsOrder}`) : router.asPath + `?page=${reviewsFiltres.$reviewsPage}&order=${reviewsFiltres.$reviewsOrder}`)
    }, [reviewsFiltres])
    const currentPage = useStore($reviewsPage)

    const items = reviews.items.map(item => <FilmInfoReviewItem isClickOnMore={true} {...item} />)

    const setCurrentPage = (page: number) => {
        setReviewsPage(page)

    }


    return (
        <Grid container>
            <Grid item xs={12}>
                <FilmIdPathTitle descrition="Рецензии" film={film} />
            </Grid>
            <Grid marginBottom={3} item xs={12}>
                <Grid alignItems='center' container>
                    <ReviewsTotal totalPositiveReviews={reviews.totalPositiveReviews} totalNeutralReviews={reviews.totalNeutralReviews} total={reviews.total} totalNegativeReviews={reviews.totalNegativeReviews} />
                    <Grid justifyContent='flex-end' container>
                        <ReviewsFilter />
                    </Grid>
                </Grid>


            </Grid>
            <Grid marginBottom={4} item xs={10}>
                <Grid justifyContent='center' container>
                    <Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} pagesCount={reviews.totalPages} />
                </Grid>

            </Grid>
            <Grid item xs={10}>
                {items}
            </Grid>

        </Grid>
    )
}

export default Reviews