import { Typography } from "@mui/material"

type Props = {
    children: any
    color?: string
}

const TitlePage = ({ children, color }: Props) => {
    return (
        <Typography sx={{ 'textDecorationColor': 'white' }} color={color || 'rgba(0, 0, 0, 1)'} display='inline' variant="h4" component='h3'>
            {children}
        </Typography>
    )
}

export default TitlePage