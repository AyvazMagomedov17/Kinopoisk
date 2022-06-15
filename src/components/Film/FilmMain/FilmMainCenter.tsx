import { Button, Grid, Typography } from "@mui/material"
import { EType } from "../../../Interfaces/enums/enums"
import { IFilm } from "../../../Interfaces/IFilm"
import s from '../../../styles/Film/filmMain.module.css'
import FilmInfoItem from "./FilmInfoItem"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from "next/router"
import { IStaff } from "../../../Interfaces/IStaff"
import { EProfessionKey } from "../../../Interfaces/enums/EProfessionKey"
import { useStore } from "effector-react"
import { $seasons } from "../../../models/film"
import Link from "next/link"
import FilmMainLink from "./FilmMainLink"

type film = {
    film: IFilm
    staff: IStaff
}
type ArrayOfInfofilmtype = {
    children: any,
    link?: any
}
const ArrayOfInfo = ({ children, link }: ArrayOfInfofilmtype) => {
    return (
        <>
            {link ?
                <FilmMainLink color='rgba(255, 255, 255, 1)' >
                    <Link href={link}>
                        <span style={{ 'marginRight': '9px', 'cursor': 'pointer' }}>{children},</span>
                    </Link>
                </FilmMainLink>
                : <span style={{ 'marginRight': '9px' }}>{children},</span>}
        </>


    )
}
const FilmMainCenter = ({ film, staff }: film) => {
    const seasons = useStore($seasons)
    let staffInfo: Array<any> = []
    let directors: Array<any> = []
    let writers: Array<any> = []
    let producers: Array<any> = []
    let composers: Array<any> = []
    const type = film.type === EType.FILM ? 'Фильм' : film.type === EType.MINI_SERIES ? 'Мини-сериал' : film.type === EType.TV_SERIES ? 'Сериал' : film.type === EType.TV_SHOW ? 'Тв-шоу' : 'Видео'
    staff?.forEach(item => {
        switch (item.professionKey) {
            case EProfessionKey.DIRECTOR:
                directors.push(<ArrayOfInfo link={`/persons/${item.staffId}`}>{item.nameRu || item.nameEn}</ArrayOfInfo>)
                break
            case EProfessionKey.WRITER:
                writers.push(<ArrayOfInfo link={`/persons/${item.staffId}`}>{item.nameRu || item.nameEn}</ArrayOfInfo>)
                break
            case EProfessionKey.PRODUCER:
                producers.push(<ArrayOfInfo link={`/persons/${item.staffId}`}>{item.nameRu || item.nameEn}</ArrayOfInfo>)
                break
            case EProfessionKey.COMPOSER:
                composers.push(<ArrayOfInfo link={`/persons/${item.staffId}`}>{item.nameRu || item.nameEn}</ArrayOfInfo>)
                break
        }


    })
    if (directors.length || writers.length || producers.length || composers.length) {
        directors.length ? staffInfo.push(<FilmInfoItem title="Режиссеры" info={directors} />) : null
        writers.length ? staffInfo.push(<FilmInfoItem title="Сценаристы" info={writers} />) : null
        producers.length ? staffInfo.push(<FilmInfoItem title="Продюссеры" info={producers} />) : null
        composers.length ? staffInfo.push(<FilmInfoItem title="Композиторы" info={composers} />) : null

    }

    const router = useRouter()
    const handleClickOnOpenKinopoiskButton = () => {
        router.push(film.webUrl)
    }
    const grayColor = 'rgba(255,255,255,.6)'
    const countries = film.countries.map(country => <span style={{ 'marginRight': '9px' }}>{country.country}</span>)
    const genres: any[] = []
    film.genres.forEach(genre => {
        if (genres.length < 3) {
            genres.push(<ArrayOfInfo>{genre.genre}</ArrayOfInfo>)
        }


    })
    const filmLength = film.type === EType.TV_SERIES || film.type === EType.MINI_SERIES ? 'Длительность серии' : 'Длительность фильма'
    return (
        <Grid paddingLeft={5} paddingRight={5} container>
            <Grid sx={{ 'maxWidth': '300px', 'wordBreak': 'break-word' }} xs={12} item><Typography fontWeight={900} variant='h2' component='h2' >{film.nameRu || film.nameEn || film.nameOriginal}</Typography></Grid>
            <Grid className={s.paddingBottom} item xs={12}><Typography variant='h6' color={grayColor}>{film.nameEn || film.nameOriginal}</Typography></Grid>
            <Grid className={s.paddingBottom} item xs={12}><Typography><span style={{ 'paddingRight': '7px' }}>{film.year} год</span>  {film.countries.map(country => <span style={{ 'paddingRight': '7px' }}>{country.country}</span>)}</Typography></Grid>
            <Grid className={s.paddingBottom} item xs={12}><Typography fontSize={18} >{film.genres[0].genre} {film.genres[1] && film.genres[1].genre}</Typography></Grid>
            <Grid marginBottom={2} className={s.paddingBottom} item xs={12}><Typography fontSize={18} >{film.shortDescription || film.slogan}</Typography></Grid>
            <Grid className={s.paddingBottom} item xs={7}><Button startIcon={<PlayArrowIcon />} color='error' onClick={handleClickOnOpenKinopoiskButton} sx={{ borderRadius: 10, height: '50px', marginBottom: '10px' }} fullWidth size='large' variant='outlined'><Typography fontSize={15}>Открыть на кинопоиске</Typography></Button></Grid>
            <Grid className={s.paddingBottom} item xs={7}><a target='__blank' href={`https://kirlovon.dev/Kinopoisk-Watch/?id=${film.kinopoiskId}`}><Button startIcon={<PlayArrowIcon />} color='success' sx={{ borderRadius: 10, height: '50px', marginBottom: '50px' }} fullWidth size='large' variant='contained'><Typography fontSize={15}>Смотреть бесплатно</Typography></Button></a></Grid>
            <Grid marginBottom={3} item xs={12}><Typography fontWeight={600} variant='h4'>О фильме:</Typography></Grid>
            <FilmInfoItem title='Год производства' info={film.year} />
            <FilmInfoItem title='Страны' info={countries} />
            <FilmInfoItem title='Жанры' info={genres} />
            <FilmInfoItem title={filmLength} info={film.filmLength && film.filmLength + ' минут'} />
            <FilmInfoItem title='Тип' info={type} />
            {film.ratingAgeLimits && <FilmInfoItem title="Возраст" info={film.ratingAgeLimits?.slice(3) + '+'} />}
            {seasons && <FilmInfoItem title="Количество сезонов" info={seasons.total} />}
            {film.slogan && <FilmInfoItem title='Слоган' info={film.slogan} />}
            {staffInfo}



        </Grid>
    )
}

export default FilmMainCenter