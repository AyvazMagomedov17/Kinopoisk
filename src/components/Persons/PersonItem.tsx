import { Card, CardActionArea, Grid, Typography } from '@mui/material'
import Router from 'next/router'
import React from 'react'
import { useMaxWidthQuery } from '../../hooks/mediaQuery'
import { ESex, ESexRu } from '../../Interfaces/enums/ESex'
import { IPersonForSearch } from '../../Interfaces/IPersons'

type Props = {}

const PersonItem = ({ kinopoiskId, nameEn, nameRu, posterUrl, sex, webUrl }: IPersonForSearch) => {
    const _1200px = useMaxWidthQuery(1200)
    const _837px = useMaxWidthQuery(837)
    const _660px = useMaxWidthQuery(660)
    const _420px = useMaxWidthQuery(420)
    const handleClick = () => {
        Router.push(`/name/${kinopoiskId}`)
    }
    return (
        <Card onClick={handleClick} sx={{ 'maxWidth': '700px', 'height': _837px ? '140px' : '160px', 'marginBottom': 3, 'minWidth': _660px ? '300px' : _837px ? '400px' : '500px' }}>


            <CardActionArea sx={{ 'height': _837px ? '160px' : '200px', 'borderRadius': '20px', }}>
                <Grid sx={{ 'marginTop': '-35px', }} paddingLeft={3} container>

                    <Grid item xs={12}>
                        <Grid container>
                            <Grid marginTop={_837px ? 2 : 0} item xs={_420px ? 4 : _837px ? 3 : _1200px ? 3 : 2}>
                                <img style={{ 'maxWidth': _420px ? '70px' : _837px ? '80px' : '100px', 'borderRadius': '10px', 'maxHeight': '140px' }} src={posterUrl} alt="" />
                            </Grid>
                            <Grid item xs={_837px ? 7 : _1200px ? 7 : 10}>
                                <Typography marginTop={4} fontWeight={600} fontSize={_837px ? 18 : 20}>
                                    {nameRu}
                                </Typography >
                                <Typography  >
                                    {nameEn}
                                </Typography>
                                <Typography >
                                    {ESexRu[sex || ESex.MALE]}
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardActionArea>

        </Card >


    )
}

export default PersonItem