import { Grid } from "@mui/material"
import { useStore } from "effector-react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { EReviewsSortType } from "../../Interfaces/enums/EReviewsSortType"
import { IFilm } from "../../Interfaces/IFilm"
import { IReviews } from "../../Interfaces/IReviews"
import { $reviewsFiltres, $reviewsPage, resetReviewsFiltres, setReviewsPage } from "../../models/film"
import FilmIdPathTitle from "../common/FilmIdPathTitle"
import NoItems from "../common/NoItems"
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


    const currentPage = useStore($reviewsPage)

    const items = reviews.items.map(item => <FilmInfoReviewItem key={item.kinopoiskId} isClickOnMore={true} {...item} />)

    const setCurrentPage = (payload: number) => {
        const page = Number(router.query.page)
        router.replace(router.query.page && router.query.order ? router.asPath.replace(`page=${page}&order=${order || EReviewsSortType.DATE_DESC}`, `page=${payload}&order=${order}`) : router.asPath + `?page=${payload}&order=${order || EReviewsSortType.DATE_DESC}`)
    }
    useEffect(() => {
        if (page)
            setReviewsPage(Number(page))
    }, [page])


    return (
        <Grid container>
            <Grid item xs={12}>
                <FilmIdPathTitle descrition="Рецензии" film={film} />
            </Grid>
            {reviews.total === 0 ? <NoItems text="Рецензий" /> :
                <>
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
                    <Grid item xs={12}>
                        {items}
                    </Grid>
                </>}


        </Grid>
    )
}

export default Reviews