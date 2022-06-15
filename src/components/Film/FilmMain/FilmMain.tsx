import { Button, Grid, Typography } from '@mui/material'
import { Box, Container, width } from '@mui/system'
import { useRouter } from 'next/router'
import { IFilm } from '../../../Interfaces/IFilm'

import { IStaff } from '../../../Interfaces/IStaff';
import FilmMainLeft from './FilmMainLeft';
import FilmMainCenter from './FilmMainCenter';
import FilmMainRight from './FilmMainRight';
import { IAwards } from '../../../Interfaces/IAwards';

type Props = {
    film: IFilm
    staff: IStaff,
    awards: IAwards

}

const FilmMain = ({ film, staff, awards }: Props) => {
    const router = useRouter()
    const backroundColor = 'black'
    const boxShadow = film.coverUrl ? 'inset 0 0 0 200vw rgba(0,0,0, 0.8)' : 'none'
    const colorOfText = 'white'



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
                <Container sx={{ paddingTop: 10 }} fixed>
                    <Grid color={colorOfText} container>
                        <Grid xs={3} item>
                            <FilmMainLeft staff={staff} awards={awards} film={film} />
                        </Grid>
                        <Grid xs={6} item>
                            <FilmMainCenter staff={staff} film={film} />
                        </Grid>
                        <Grid xs={3} item>
                            <FilmMainRight film={film} />
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </Box >


    )
}

export default FilmMain