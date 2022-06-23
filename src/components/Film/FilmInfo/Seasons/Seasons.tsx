import { Grid } from "@mui/material"
import { ISeasons } from "../../../../Interfaces/ISeasons"
import SeasonItem from "./SeasonItem"

type Props = {
    seasons: ISeasons | null
}

const Seasons = ({ seasons }: Props) => {
    const items = seasons?.items.map(item => <SeasonItem key={item.number} {...item} />)
    return (
        <Grid container>
            {items}
        </Grid>
    )
}

export default Seasons