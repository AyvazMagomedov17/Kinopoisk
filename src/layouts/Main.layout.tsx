import { Grid, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

import Header from '../components/common/Header/Header';
import Navbar from '../components/common/Navbar';
import { useMaxWidthQuery } from '../hooks/mediaQuery';

type Props = {
    children: any
    title?: string
}

export const MainLayout = ({ title, children }: Props) => {
    const maxWidth1200 = useMaxWidthQuery(1200)
    const _578px = useMaxWidthQuery(578)

    return (
        <>
            <Header />
            <Container sx={{ 'margin-top': '50px' }} fixed>
                <Grid justifyContent='center' container spacing={2}>
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

