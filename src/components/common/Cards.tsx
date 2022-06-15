import { Grid } from '@mui/material'
import React from 'react'

type Props = {
    items: any
}

const Cards = ({ items }: Props) => {
    return (
        <Grid container rowGap={5} marginTop={5} >
            {items}

        </Grid>
    )
}

export default Cards