import { Grid, Typography } from '@mui/material'
import React from 'react'
import { IAward } from '../../../Interfaces/IAwards'
import AwardPerson from './AwardPerson'

type Props = {}

const AwardItem = ({ imageUrl, name, nominationName, persons, win, year }: IAward) => {
    const isWin = win ? 'Победитель' : 'Номинации'
    const color = win ? 'rgba(190, 136, 0, 1)' : 'rgba(9, 94, 175, 1)'
    const person = persons.map(person => <AwardPerson key={person.kinopoiskId} {...person} />)
    return (

        <Grid marginBottom={2} container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography fontSize={17} fontWeight={500}>
                            {nominationName}
                        </Typography>

                    </Grid>
                    <Grid item xs={4}>

                        <Typography marginRight={2} fontSize={15} display='inline'>{year}</Typography>
                        <Typography color={color} display='inline'> {isWin}</Typography>

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