import { Button, Grid, Typography } from '@mui/material'
import Router from 'next/router'
import React from 'react'

type Props = {
    text: string
}

const NoItems = ({ text }: Props) => {
    const handleClick = () => {
        Router.back()
    }
    return (
        <Grid justifyContent='center' container >
            <Grid item xs={12}>
                <Grid marginBottom={4} justifyContent='center' container>
                    <Typography textAlign='center' variant='h3' component='span'>{text} нет</Typography>
                </Grid>
                <Grid justifyContent='center' container>
                    <Button onClick={handleClick} sx={{ 'width': '300px', 'height': '50px', 'borderRadius': '15px' }} color='secondary' variant='contained'>Вернуться назад</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NoItems