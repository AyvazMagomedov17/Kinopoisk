import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IEpisode } from '../../../../Interfaces/ISeasons'
import Episode from './Episode'
type Props = {}

const SeasonItem = ({ episodes, number }: IEpisode) => {
    const [showEpisodes, setShowEpisodes] = useState(false)
    const items = episodes.map(episode => <Episode key={episode.nameRu} {...episode} />)
    const handleClick = () => {
        setShowEpisodes(prev => !prev)
    }
    return (
        <>
            <Grid marginBottom={3} item xs={12}>
                <button style={{ 'cursor': 'pointer' }} onClick={handleClick}><Typography sx={{
                    'transition': 'all 0.3s',
                    '&:hover': {
                        'transform': 'scale(1.1)',
                        'transition': 'all 0.3s',
                    }
                }} fontWeight={700} variant='h5'>{number} сезон</Typography></button>
            </Grid>
            {showEpisodes && <Grid item xs={12}>
                <Grid gap={1} container>
                    {items}
                </Grid>

            </Grid>}

        </>

    )
}

export default SeasonItem