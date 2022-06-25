import { Button, Grid, Typography } from '@mui/material'
import { Box, Container, width } from '@mui/system'
import { useRouter } from 'next/router'
import { IFilm } from '../../../Interfaces/IFilm'

import { IStaff } from '../../../Interfaces/IStaff';
import FilmMainLeft from './FilmMainLeft';
import FilmMainCenter from './FilmMainCenter';
import FilmMainRight from './FilmMainRight';
import { IAwards } from '../../../Interfaces/IAwards';
import { useMaxWidth900, useMaxWidthQuery } from '../../../hooks/mediaQuery';
import FilmAwards from './FilmAwards';
import FilmMainActors from './FilmMainActors';
import FilmMainBoxOffice from './FilmMainBoxOffice';
import { IBoxOffice } from '../../../Interfaces/IBoxOffice';
import { ISeasons } from '../../../Interfaces/ISeasons';
import BackButton from '../../common/BackButton';

type Props = {
    film: IFilm
    staff: IStaff,
    awards: IAwards
    boxOffice: IBoxOffice
    seasons: ISeasons

}

const FilmMain = ({ film, staff, awards, boxOffice, seasons }: Props) => {
    const router = useRouter()
    const backroundColor = 'black'
    const boxShadow = film.coverUrl ? 'inset 0 0 0 200vw rgba(0,0,0, 0.8)' : 'none'
    const colorOfText = 'white'
    const _900px = useMaxWidth900()
    const _600px = useMaxWidthQuery(600)
    const _420px = useMaxWidthQuery(420)

    const styles = {
        container: {
            minHeight: '100vh',
            width: '100vw',
            backroundColor: backroundColor,
            alignItems: 'center',
            position: 'relative',



        },
        backround: {
            minHeight: '100vh',
            width: '100vw',
            backgroundImage: `url(${film.coverUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqT_5D4N6cgDnpZtJpzPFmDsA2zFh6DsaSCw&usqp=CAU'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top left 50%',
            boxShadow: { boxShadow },
            paddingBottom: '30px'

        },
        paddingBottom: {
            paddingBottom: '10px'
        }
    }


    return (


        <Box sx={styles.container}>
            <Box sx={styles.backround}>
                <Container sx={{ paddingTop: 8, position: 'relative' }} fixed>
                    <Grid justifyContent='center' color={colorOfText} container>
                        <Grid paddingBottom={3} item xs={12}>
                            <BackButton white />
                        </Grid>
                        <Grid xs={_900px ? 12 : 3} item>
                            <FilmMainLeft staff={staff} awards={awards} film={film} />
                        </Grid>
                        <Grid xs={_900px ? 12 : 6} item>
                            <FilmMainCenter seasons={seasons} staff={staff} film={film} />
                        </Grid>
                        <Grid xs={_900px ? 12 : 3} item>
                            {!_900px && <FilmMainRight boxOffice={boxOffice} film={film} />}
                            {_900px ?
                                <Grid justifyContent='center' container>
                                    <Grid item xs={4}>
                                        <FilmAwards awards={awards} />
                                    </Grid>
                                    <Grid item xs={_600px ? 3 : 4}>
                                        <FilmMainActors staff={staff} />
                                    </Grid>
                                    <Grid item xs={_420px ? 9 : _600px ? 8 : 4}>
                                        <FilmMainBoxOffice boxOffice={boxOffice} />
                                    </Grid>
                                </Grid> : null}
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </Box >


    )
}

export default FilmMain