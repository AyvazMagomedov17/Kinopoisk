import { Paper } from "@mui/material"
import { Box } from "@mui/system"

type Props = {
    img: any
}

const LeftName = ({ img }: Props) => {
    return (
        <Box >

            <img style={{ 'maxWidth': '300px', 'maxHeight': '418px', }} src={img} alt="" />


        </Box>
    )
}

export default LeftName