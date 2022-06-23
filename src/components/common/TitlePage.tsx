import { Typography } from "@mui/material"
import { useMaxWidthQuery } from "../../hooks/mediaQuery"

type Props = {
    children: any
    color?: string
}

const TitlePage = ({ children, color }: Props) => {
    const _425px = useMaxWidthQuery(425)
    return (
        <Typography sx={{ 'textDecorationColor': 'white' }} color={color || 'rgba(0, 0, 0, 1)'} display='inline' variant={_425px ? 'h5' : "h4"} component='h3'>
            {children}
        </Typography>
    )
}

export default TitlePage