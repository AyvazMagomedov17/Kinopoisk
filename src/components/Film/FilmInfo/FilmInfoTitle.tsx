import { Typography } from '@mui/material'
import React from 'react'

type Props = {
    children: string
    color?: string
}

const FilmInfoTitle = ({ children, color }: Props) => {
    return (
        <Typography fontWeight={700} marginTop={6} color={color || 'black'} marginBottom={3} variant='h4'>{children}</Typography>
    )
}

export default FilmInfoTitle