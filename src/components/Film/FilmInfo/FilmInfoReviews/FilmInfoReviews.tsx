import { Grid, Typography } from "@mui/material"
import { useState } from "react"
import { useMaxWidthQuery } from "../../../../hooks/mediaQuery"
import { IReviews } from "../../../../Interfaces/IReviews"
import FilmInfoReviewItem from "./FilmInfoReviewItem"
import FilmInfoReviewsTotal from "./FilmInfoReviewsTotal/FilmInfoReviewsTotal"
import ReviewModal from "./ReviewModal"

type Props = {
    reviews: IReviews
}

const FilmInfoReviews = ({ reviews }: Props) => {
    const _636px = useMaxWidthQuery(636)
    const [itemsLenght, setItemsLenght] = useState(1)
    const [isClickOnMore, setIsClickOnMore] = useState(false)
    const items = reviews.items.slice(0, itemsLenght).map(item => <FilmInfoReviewItem isClickOnMore={isClickOnMore} key={item.kinopoiskId} {...item} />)
    const handleClick = () => {
        setItemsLenght(prev => prev + 3)
        setIsClickOnMore(true)
    }



    return (
        <>
            <Grid paddingBottom={5} gap={1} container>
                {_636px && <Grid item xs={12}>
                    <FilmInfoReviewsTotal total={reviews.total} totalNegativeReviews={reviews.totalNegativeReviews} totalNeutralReviews={reviews.totalNeutralReviews} totalPositiveReviews={reviews.totalPositiveReviews} />
                </Grid>}
                <Grid item xs={_636px ? 12 : 9}>
                    {items}
                    {itemsLenght < 20 ? <button style={{ 'cursor': 'pointer' }} onClick={handleClick}>
                        <Typography sx={{
                            'cursor': 'pointer',
                            'transition': 'all 0.3s',
                            '&:hover': {
                                'transform': 'scale(1.1)',
                                'transition': 'all 0.3s',
                            }
                        }} fontWeight={700}>Показать еще...</Typography>
                    </button> : null}

                </Grid>
                {!_636px && <Grid item xs={2}>
                    <FilmInfoReviewsTotal total={reviews.total} totalNegativeReviews={reviews.totalNegativeReviews} totalNeutralReviews={reviews.totalNeutralReviews} totalPositiveReviews={reviews.totalPositiveReviews} />
                </Grid>}

            </Grid>

        </>

    )
}

export default FilmInfoReviews