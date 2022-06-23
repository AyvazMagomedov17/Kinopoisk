import { Box } from "@mui/material"
import { IStaff } from "../../Interfaces/IStaff"
import CastItem from "./CastItem"

type Props = {
    staff: IStaff
}

const CastItems = ({ staff }: Props) => {
    const items = staff.map(item => <CastItem key={Math.random() + item.staffId} {...item} />)
    return (
        <Box paddingTop={5}>
            {items}
        </Box>

    )
}

export default CastItems