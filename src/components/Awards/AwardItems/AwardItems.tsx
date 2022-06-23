import { Grid, Typography } from "@mui/material"
import { IAward } from "../../../Interfaces/IAwards"
import AwardItem from "./AwardItem"

interface IProps {
    name: string | null
    items: IAward[]

}

const AwardItems = ({ name, items }: IProps) => {
    const components = items.map(item => <AwardItem key={item.nominationName} {...item} />)
    return (
        <Grid marginBottom={3} sx={{ minHeight: '150px', 'border': '1px solid black', 'padding': '20px', 'borderRadius': '20px' }} container>
            <Grid item xs={12}>
                <Typography fontWeight={600} color='rgba(48, 96, 125, 1)' variant="h5" marginBottom={3}>
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    {components}
                </Typography>
            </Grid>

        </Grid>
    )
}

export default AwardItems