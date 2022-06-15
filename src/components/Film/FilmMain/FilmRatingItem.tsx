import { Grid, Typography } from '@mui/material'

type Props = {
    info: any,
    title: string
    votesCount?: number | null
    color?: string,
    fz?: any
}

const FilmRatingItem = ({ info, title, votesCount, color, fz }: Props) => {
    const grayColor = 'rgba(255,255,255,.6)'
    return (
        <>

            <Grid item xs={12}>
                <Typography display='inline' paddingRight={2} fontSize={14} color={grayColor} >{!fz && 'Рейтинг'} {title}:</Typography>
                <Typography fontWeight={!fz ? 700 : 400} color={color || 'green'} fontSize={fz || null} variant={fz || 'h5'} display='inline'>
                    {info}
                </Typography>

                {votesCount && <Typography color={grayColor} fontSize={11}>({votesCount?.toLocaleString('ru')} голосов.)</Typography>}

            </Grid>
        </>
    )
}

export default FilmRatingItem