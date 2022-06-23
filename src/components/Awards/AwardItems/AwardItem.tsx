import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useMaxWidthQuery } from '../../../hooks/mediaQuery'
import { IAward } from '../../../Interfaces/IAwards'
import AwardPerson from './AwardPerson'

type Props = {}

const AwardItem = ({ imageUrl, name, nominationName, persons, win, year }: IAward) => {
    const isWin = win ? 'Победитель' : 'Номинации'
    const color = win ? 'rgba(190, 136, 0, 1)' : 'rgba(9, 94, 175, 1)'
    const person = persons.map(person => <AwardPerson key={person.kinopoiskId} {...person} />)
    const _550px = useMaxWidthQuery(550)
    const _514px = useMaxWidthQuery(515)
    const colorName = !_514px ? 'rgba(0, 0, 0, 1)' : win ? 'rgba(255, 156, 0, 1)' : 'black'
    return (

        <Grid marginBottom={2} container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={_514px ? 12 : _550px ? 8 : 7}>
                        <Typography color={colorName} fontSize={17} fontWeight={500}>
                            {nominationName}
                        </Typography>

                    </Grid>
                    <Grid item xs={_514px ? 12 : _550px ? 4 : 5}>

                        <Typography marginRight={2} fontSize={15} display='inline'>{year}</Typography>
                        {!_514px && <Typography color={color} display='inline'> {isWin}</Typography>}

                    </Grid>
                    <Grid item xs={3}>
                        {person}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AwardItem