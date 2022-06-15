import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';

type Props = {
    children: any
    title?: string
}

export const MainLayout = ({ title, children }: Props) => {
    return (
        <>
            <Header />
            <Container sx={{ 'margin-top': '50px' }} fixed>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Navbar />
                    </Grid>
                    <Grid item xs={10}>
                        {children}
                    </Grid>

                </Grid>
            </Container>





        </>

    )
}

