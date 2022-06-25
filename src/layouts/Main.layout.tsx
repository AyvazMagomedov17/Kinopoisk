import { Grid, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react'
import BackButton from '../components/common/BackButton';

import Header from '../components/common/Header/Header';
import Navbar from '../components/common/Navbar';
import { useMaxWidthQuery } from '../hooks/mediaQuery';
import { IGenresCountriesList } from '../Interfaces/IGenresCountriesList';
import { TOPS } from '../paths/filmsPahts';

type Props = {
    children: any
    title?: string
    genresCountriesList: IGenresCountriesList
}

export const MainLayout = ({ title, children, genresCountriesList }: Props) => {
    const maxWidth1200 = useMaxWidthQuery(1200)
    const _578px = useMaxWidthQuery(578)
    const router = useRouter()
    return (
        <>
            <Header genresCountriesList={genresCountriesList} />
            <Container sx={{ 'margin-top': '50px' }} fixed>
                <Grid justifyContent='center' container spacing={2}>
                    {router.query.src !== TOPS && <Grid item xs={12}>
                        <BackButton />
                    </Grid>}
                    {!_578px && <Grid item xs={!maxWidth1200 ? 2 : 4}>

                        <Navbar />

                    </Grid>}


                    <Grid item xs={!maxWidth1200 ? 10 : _578px ? 12 : 8}>
                        {children}
                    </Grid>

                </Grid>
            </Container>





        </>

    )
}

