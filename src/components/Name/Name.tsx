import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useMaxWidthQuery } from '../../hooks/mediaQuery'
import { IPerson } from '../../Interfaces/IPerson'
import BackButton from '../common/BackButton'
import FactItemName from './FactItemName'
import FilmsName from './FilmsName/FilmsName'
import LeftName from './LeftName'
import MainName from './MainName/MainName'
import Spouse from './Spouse'

type Props = {
    person: IPerson | null
}

const Name = ({ person }: Props) => {
    const facts = person?.facts.map(fact => <FactItemName key={fact} text={fact} />)
    const _900px = useMaxWidthQuery(900)
    const backgroundStyle = {
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: 'rgba(24, 38, 39, 1)',
        color: '#FFFF'
    }
    return (
        <Box sx={backgroundStyle}>
            <Container sx={{ 'paddingTop': '50px' }} fixed>
                <Grid sx={{ 'paddingBottom': '30px' }} item xs={12}>
                    <BackButton white />
                </Grid>
                <Grid justifyContent='center' container>

                    <Grid marginBottom={2} item xs={_900px ? 12 : 4}>
                        <Grid justifyContent='center' container>
                            <LeftName img={person?.posterUrl} />
                        </Grid>

                    </Grid>
                    <Grid marginBottom={2} item xs={_900px ? 12 : 8}>

                        <MainName person={person} />


                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {facts?.length ? <>
                                <Grid xs={12} item>
                                    <Typography variant='h5'>Интересные факты:</Typography>
                                </Grid>
                                {facts}</> : null}
                            <Grid marginTop={2} xs={12} item>
                                <Typography variant='h5'>
                                    Фильмы:
                                </Typography>

                            </Grid>
                            <FilmsName films={person?.films} sex={person?.sex} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default Name