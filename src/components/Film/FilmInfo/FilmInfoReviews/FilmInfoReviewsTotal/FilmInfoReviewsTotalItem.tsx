import { Box, Grid, Typography } from "@mui/material"
import Router, { useRouter } from "next/router"
import { useMaxWidthQuery } from "../../../../../hooks/mediaQuery"
import { EReviewsSortType } from "../../../../../Interfaces/enums/EReviewsSortType"

type Props = {
    description: string,
    count: number
    color: string
    type: EReviewsSortType
}

const FilmInfoReviewsTotalItem = ({ color, count, description, type }: Props) => {
    const router = useRouter()
    const _636px = useMaxWidthQuery(636)
    const _468px = useMaxWidthQuery(468)
    const handleClick = () => {
        router.push(router.asPath + `/reviews?page=1&order=${type}`)
    }
    return (

        <Grid item xs={_468px ? 6 : _636px ? 3 : 12}>
            <span style={{ 'cursor': 'pointer' }} onClick={handleClick}>
                <Box marginBottom={2}>
                    <Typography fontWeight={600} variant="h5" component='span' color={color}>{count}</Typography>
                    <Typography fontSize={12} color='rgba(19, 69, 100, 1)'>{description}</Typography>
                </Box>
            </span>

        </Grid>



    )
}

export default FilmInfoReviewsTotalItem