import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


type Props = {}

const Index = (props: Props) => {
    const [imageUrl, setImageUrl] = useState('')
    useEffect(() => {
        setImageUrl(String(localStorage.getItem('imageUrl')))
        return function () {
            localStorage.removeItem('imageUrl')
        }
    }, [])

    const style = {
        backgroundColor: 'rgba(13, 8, 39, 1)',
        width: '100vw',
        height: '100vh',


    }

    return (
        <Grid alignItems='center' justifyContent='center' container sx={style}>

            <img style={{ 'maxHeight': '100vh', 'maxWidth': '100vw', 'objectFit': 'contain', 'padding': '10px' }} src={imageUrl} alt="film image" />
        </Grid>
    )
}

export default Index