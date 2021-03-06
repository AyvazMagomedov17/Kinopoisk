import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Image from "next/image"
import Router, { useRouter } from "next/router"
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"

type Props = {
    img: any
    text: string
    link: string | number
}

const CardFilter = ({ img, text, link }: Props) => {
    const rout = useRouter()
    const router = useRouter().asPath.replace(String(rout.query.src), '')
    const _768px = useMaxWidthQuery(768)

    const handleClick = () => {
        Router.push('/movielist/' + link)
    }
    return (
        <Grid xs={12}>
            <Card onClick={handleClick} sx={{
                maxWidth: '800px',
                height: '140px',
                "borderRadius": '20px',
                "transition": "all 0.3s",
                "&:hover": {
                    "transform": "scale(1.01)",
                    "backgroundColor": 'rgba(250, 243, 246, 0.79)',
                    "transition": "all 0.3s"
                }
            }}>
                <CardActionArea sx={{ 'paddingLeft': '20px', 'paddingTop': '30px', 'display': 'flex', 'justifyContent': 'flex-start', alignItems: 'center' }}>

                    <Image style={{ 'borderRadius': '10px' }} width={88} height={88} src={img} />
                    <CardContent><Typography variant={_768px ? 'h6' : 'h5'}>{text}</Typography></CardContent>
                </CardActionArea>


            </Card>
        </Grid>

    )
}

export default CardFilter