import { Grid } from '@mui/material'
import React from 'react'
import { EFactType } from '../../../../Interfaces/enums/EFactType'
import { IFact } from '../../../../Interfaces/IFacts'

type Props = {}

const FilmFactItem = ({ spoiler, text, type }: IFact) => {

    return (
        <Grid alignItems='center' sx={{ 'marginBottom': '17px' }} container>
            <Grid item xs={0.7}>
                ◉
            </Grid>
            <Grid color={type === EFactType.FACT ? 'rgba(13, 72, 2, 1)' : 'rgba(155, 0, 0, 1)'} item xs={10}>
                <div dangerouslySetInnerHTML={{ __html: text }}>
                </div>

            </Grid>
        </Grid >
    )
}

export default FilmFactItem