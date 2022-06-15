import { Link } from "@mui/material"

type Props = {
    children: any
    color?: any
}

const FilmMainLink = ({ children, color }: Props) => {

    return (
        <Link sx={{ 'cursor': 'pointer' }} color={color || 'rgba(250, 122, 122, 1)'}  >{children}</Link>
    )
}

export default FilmMainLink