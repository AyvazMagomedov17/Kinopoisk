import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
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
    ratingVoteCount: number | null
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
    const type = props.type === EType.FILM ? 'Фильм' : props.type === EType.MINI_SERIES ? 'Мини-сериал' : props.type === EType.TV_SERIES ? 'Сериал' : props.type === EType.TV_SHOW ? 'Тв-шоу' : 'Видео'
    const router = useRouter()
    const handleClick = () => {
        router.push(`/film/${props.filmId || props.kinopoiskId}`)
    }
    return (
        <>
            <Grid item xs={12}>
                <Card onClick={handleClick} sx={{ 'height': '120px', maxWidth: '800px', 'boxShadow': 'none' }}>
                    <CardActionArea sx={{ 'borderRadius': '20px', 'display': 'flex', 'justifyContent': 'space-between', 'paddingLeft': '30px' }} >
                        <CardContent sx={{ 'display': 'flex', 'alignItems': 'center', paddingTop: '15px' }}>
                            <div className="imageBox">
                                <img className="image" src={props.posterUrlPreview || props.posterUrl} alt="" />
                            </div>
                            <Grid sx={{ 'flex': '0 0 400px' }} container>
                                <Grid item xs={12}><Typography fontSize={18}>{props.nameRu || props.nameEn || props.nameOriginal} </Typography></Grid>
                                <Grid item xs={12}><Typography fontSize={13}>{props.nameEn || props.nameOriginal} {props.year} {props.filmLength ? props.filmLength + ' мин.' : type} </Typography></Grid>
                                <Grid item xs={12}><Typography fontSize={13}>{props.countries.map((count) => <span style={{ 'fontSize': '13px', 'paddingRight': '5px' }} >{count.country}</span>)}{props.genres.map(genre => <span style={{ 'fontSize': '13px', 'paddingRight': '5px' }} >{genre.genre}</span>)} </Typography></Grid>
                            </Grid>
                            <Grid container sx={{ 'flex': '1 0 400px', 'paddingLeft': '70px' }} >
                                <Grid item xs={12}>
                                    <Typography display='inline' fontSize={14}>Рейтинг:</Typography > <Typography fontSize={18} color='green' display='inline'>{props.rating || props.ratingKinopoisk || props.ratingImdb}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography display='inline' fontSize={14}>Количество голосов:</Typography > <Typography fontSize={15} color='red' display='inline'>{props.ratingVoteCount}</Typography>
                                </Grid>
                            </Grid>

                        </CardContent>

                    </CardActionArea>

                </Card>
            </Grid>
            <style jsx>{`
            .imageBox{
                min-width: 70px;
                margin-right: 20px;
            }
                .image{
                    border-radius: 5px;
                    width: 64px;
                    height:96px;
                    
                }
            
            `}</style>
        </>


    )
}

export default CardFilm