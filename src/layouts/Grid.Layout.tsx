import { Box, Grid } from "@mui/material"

type Props = {}

const GridLayout = (props: Props) => {
    return (
        <Box sx={{ 'max-width': '1150px', 'margin': '0 auto' }}>
            <Grid columns={16} container spacing={2}>
                <Grid item xs={3}>
                    Сайдбар
                </Grid>

                <Grid item xs={10}>
                    див5
                </Grid>
            </Grid>
        </Box>
    )
}

export default GridLayout