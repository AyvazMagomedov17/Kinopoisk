import { Grid, Typography } from "@mui/material"
import { IPersons } from "../../Interfaces/IPersons"
import PersonItem from "./PersonItem"

type Props = {
    persons: IPersons | null
}

const PersonsList = ({ persons }: Props) => {
    const items = persons?.items.map(item => <PersonItem key={item.kinopoiskId} {...item} />)
    return (
        <Grid marginTop={5} container>
            <Grid marginBottom={3} xs={12}>
                <Typography fontWeight={900} fontSize={30}>
                    <Typography fontWeight={600} fontSize={20} marginRight={2} display='inline'>
                        Найдено
                    </Typography>
                    {persons?.total}</Typography>
            </Grid>
            <Grid xs={12}>
                {items}
            </Grid>
        </Grid>
    )
}

export default PersonsList