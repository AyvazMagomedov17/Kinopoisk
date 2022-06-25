import { Typography } from "@mui/material"
import { useMaxWidthQuery } from "../../hooks/mediaQuery"

type Props = {
    children: any
    color?: string
}

const TitlePage = ({ children, color }: Props) => {
    const _425px = useMaxWidthQuery(425)
    const _900px = useMaxWidthQuery(900)
    const _575px = useMaxWidthQuery(575)

    const _527px = useMaxWidthQuery(527)
    const _466px = useMaxWidthQuery(466)
    return (
        <Typography sx={{ 'textDecorationColor': 'white' }} color={color || 'rgba(0, 0, 0, 1)'} display='inline' fontSize={_425px ? 22 : _466px ? 24 : _527px ? 28 : _575px ? 32 : 35} component='h3'>
            {children}
        </Typography>
    )
}

export default TitlePage