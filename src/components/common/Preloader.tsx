import { Grid } from "@mui/material"
import Image from "next/image"

type Props = {}

const Preloader = (props: Props) => {
    return (
        <Grid width='100vw' height='100vh' alignItems='center' justifyContent='center' container>
            <Image width={600} height={400} src='/loader/loader.gif' />
        </Grid>

    )
}

export default Preloader