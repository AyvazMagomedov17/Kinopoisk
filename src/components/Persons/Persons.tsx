import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { IGenresCountriesList } from '../../Interfaces/IGenresCountriesList'
import { IPersons } from '../../Interfaces/IPersons'
import { MainLayout } from '../../layouts/Main.layout'
import PersonsList from './PersonsList'
import PersonsSearch from './PersonsSearch'
type Props = {
    persons: IPersons | null
    genresCountriesList: IGenresCountriesList
}

const Persons = ({ persons, genresCountriesList }: Props) => {
    const name = useRouter().query.name
    return (
        <MainLayout genresCountriesList={genresCountriesList}>
            <Grid container>
                <Grid marginBottom={4} item xs={12}>
                    <Typography variant='h4'>
                        Персоны
                    </Typography>
                </Grid>
                <PersonsSearch />
                <Grid item xs={12}>
                    {persons?.total && name ? <PersonsList persons={persons} /> : null}
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default Persons