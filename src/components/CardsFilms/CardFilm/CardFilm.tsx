import { Card, CardActionArea, CardContent, Grid, Paper, Typography, useMediaQuery } from "@mui/material"
import { useRouter } from "next/router"
import { useMaxWidthQuery } from "../../../hooks/mediaQuery"
import { EType } from "../../../Interfaces/enums/enums"
import { ICountrie, IGenre } from "../../../Interfaces/IFilm"

type Props = {
    filmId?: number
    nameRu: string | null
    nameEn: string | null
    year: string | null | number
    filmLength?: string | null
    countries: ICountrie[]
    genres: IGenre[]
    rating: number | null
    ratingVoteCount?: number | null
    posterUrl: string | null
    posterUrlPreview: any,
    kinopoiskId?: number
    imdbId?: number | null
    nameOriginal?: string | null
    ratingKinopoisk?: number | null
    ratingImdb?: number | null
    type?: EType





}

const CardFilm = (props: Props) => {
    const media = useMediaQuery('(max-width: 1200px)')
    const type = props.type === EType.FILM ? 'Фильм' : props.type === EType.MINI_SERIES ? 'Мини-сериал' : props.type === EType.TV_SERIES ? 'Сериал' : props.type === EType.TV_SHOW ? 'Тв-шоу' : 'Видео'
    const router = useRouter()
    const handleClick = () => {
        router.push(`/film/${props.filmId || props.kinopoiskId}`)
    }
    const _900px = useMaxWidthQuery(900)
    const _553px = useMaxWidthQuery(553)
    const _510px = useMaxWidthQuery(510)
    const _420px = useMaxWidthQuery(420)
    const _355px = useMaxWidthQuery(355)
    return (
        <>
            <Grid sx={{
                'transition': 'all 0.3s',
                '&:hover': {
                    'transform': 'scale(1.01)',
                    'transition': 'all 0.3s'
                }
            }} item xs={12}>
                < Card onClick={handleClick} sx={{ 'minHeight': '120px', maxWidth: '800px', 'boxShadow': 'none' }}>
                    <CardActionArea sx={{ 'borderRadius': '20px', 'display': 'flex', 'justifyContent': 'space-between', }} >
                        <CardContent sx={{ 'display': 'flex', 'alignItems': 'center', paddingTop: '15px' }}>
                            <Paper sx={{ 'maxWidth': '60px', marginRight: '20px' }}>
                                <div className="imageBox">
                                    <img className="image" src={props.posterUrlPreview || props.posterUrl} alt="" />
                                </div>
                            </Paper>
                            <Grid container>
                                <Grid item xs={_420px ? 9 : _510px ? 10 : _553px ? 6 : 7}>
                                    <Grid container>
                                        <Grid item xs={12}><Typography fontSize={_355px ? 14 : _510px ? 16 : 18}>{props.nameRu || props.nameEn || props.nameOriginal} </Typography></Grid>
                                        <Grid item xs={12}><Typography fontSize={_510px ? 12 : 13}>{props.nameEn || props.nameOriginal} {props.year} {props.filmLength ? props.filmLength + ' мин.' : type} </Typography></Grid>
                                        <Grid sx={{ 'width': _355px ? '180px' : _510px ? '230px' : '400px', 'wordBreak': 'break-word' }} item xs={12}><Typography fontSize={13}>{!_900px ? props.countries.map((count) => <span key={count.country} style={{ 'fontSize': '13px', 'paddingRight': '5px' }} >{count.country}</span>) : <span style={{ 'fontSize': '13px', 'paddingRight': '5px' }}>{props.countries[0].country}</span>}{!_900px ? props.genres.map(genre => <span key={genre.genre} style={{ 'fontSize': '13px', 'paddingRight': '5px' }} >{genre.genre}</span>) : <span style={{ 'fontSize': '13px', 'paddingRight': '5px' }}>{props.genres[0].genre}</span>} </Typography></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={_510px ? 2 : _553px ? 6 : 5}>
                                    <Grid container sx={{ 'paddingLeft': _553px ? '30px' : '70px' }} >
                                        {_510px ? <>
                                            <Grid justifyContent='flex-end' item xs={12}>
                                                <Typography fontSize={18} color='green' display='inline'>
                                                    {props.rating || props.ratingKinopoisk || props.ratingImdb}
                                                </Typography>
                                            </Grid>
                                        </>
                                            : <><Grid item xs={12}>
                                                <Typography display='inline' fontSize={14}>Рейтинг:</Typography > <Typography fontSize={18} color='green' display='inline'>{props.rating || props.ratingKinopoisk || props.ratingImdb}</Typography>
                                            </Grid>
                                                <Grid item xs={12}>
                                                    <Typography display='inline' fontSize={13}>{props.ratingImdb ? 'Рейтинг IMDB' : 'Количество голосов'}:</Typography > <Typography fontSize={15} color='red' display='inline'>{props.ratingVoteCount}</Typography>
                                                </Grid></>}
                                    </Grid>
                                </Grid>
                            </Grid>


                        </CardContent>

                    </CardActionArea>

                </Card>
            </Grid >
            <style jsx>{`
            .imageBox{
                min-width: 70px;
                margin-right: 20px;
            }
                .image{
                    border-radius: 5px;
                    width: ${'64px'};
                    
                    
                }
            
            `}</style>
        </>


    )
}

export default CardFilm