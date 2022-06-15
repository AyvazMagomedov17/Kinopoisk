import { Box, Grid, Typography } from "@mui/material"

type Props = {
    description: string,
    count: number
    color: string
}

const FilmInfoReviewsTotalItem = ({ color, count, description }: Props) => {
    return (
        <Box marginBottom={2}>
            <Typography fontWeight={600} variant="h5" component='span' color={color}>{count}</Typography>
            <Typography fontSize={12} color='rgba(19, 69, 100, 1)'>{description}</Typography>
        </Box>
    )
}

export default FilmInfoReviewsTotalItem