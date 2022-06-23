import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useMaxWidthQuery } from '../../../hooks/mediaQuery'

type Props = {
    title: string
    info: any
}

const AboutPersonItem = ({ title, info }: Props) => {
    const _900px = useMaxWidthQuery(900)
    return (
        <Grid marginBottom={1} item xs={12}>
            <Grid justifyContent={_900px ? 'center' : 'flex-start'} container>
                <Grid item xs={3}>
                    <Typography fontSize={15} fontWeight={300} color='rgba(162, 152, 157, 1)'>
                        {title}:
                    </Typography>

                </Grid>
                <Grid textAlign={_900px ? 'center' : 'start'} item xs={7}>
                    <Typography fontSize={16}>
                        {info}
                    </Typography>

                </Grid>
            </Grid>
        </Grid>

    )
}

export default AboutPersonItem