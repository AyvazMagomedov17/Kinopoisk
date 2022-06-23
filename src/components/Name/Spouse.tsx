import { Grid, Typography } from "@mui/material"
import { ISpouse } from "../../Interfaces/IPerson"
import FilmMainLink from "../Film/FilmMain/FilmMainLink"

type Props = {}

const Spouse = ({ children, divorced, divorcedReason, name, personId, relation, sex, webUrl }: ISpouse) => {
    return (
        <Grid marginBottom={0.5} container>

            <Typography marginRight={1} color='rgba(250, 250, 250, 1)' sx={{ 'textDecoration': 'underline' }} display='inline'>
                <a style={{ 'color': 'rgba(250, 250, 250, 1)' }} href={`/name/${personId}`}>{name} </a>
            </Typography>


            <Typography marginRight={1} display='inline'> {divorcedReason}</Typography>
            {children ? <Typography display='inline'> {children} реб.</Typography> : null}
        </Grid >
    )
}

export default Spouse