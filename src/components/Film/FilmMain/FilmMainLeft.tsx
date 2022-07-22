import { Alert, AlertTitle, Button, Grid, Stack, Typography } from "@mui/material"
import { useStore } from "effector-react"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import { useState } from "react"
import { useMaxWidth900 } from "../../../hooks/mediaQuery"
import { EProfessionKey } from "../../../Interfaces/enums/EProfessionKey"
import { IAwards } from "../../../Interfaces/IAwards"
import { IFilm } from "../../../Interfaces/IFilm"
import { IStaff } from "../../../Interfaces/IStaff"
import { setCastFilterEv } from "../../../models/castFilter"
import { $favoriteFilm, addFavoriteFilmFx, deleteFavoriteFilmFx, I$favoriteFilm } from "../../../models/favoriteFilms"
import { $user, toggleIsNeedToBack } from "../../../models/user"
import FilmAwards from "./FilmAwards"
import FilmMainActors from "./FilmMainActors"
import FilmMainLink from "./FilmMainLink"

type Props = {
    film: IFilm
    awards: IAwards,
    staff: IStaff

}

const FilmMainLeft = ({ film, awards, staff }: Props) => {
    const [isAddedInFavorite, setIsAddedInFavorite] = useState(false)
    const [isDeletedInFavorite, setIsDeletedInFavorite] = useState(false)
    const [isNotAuth, setIsNotAuth] = useState(false)
    const user = useStore($user)
    const query = useRouter().query
    const _900px = useMaxWidth900()
    const favoriteFilm = useStore($favoriteFilm)
    const actors: any[] = []
    const handleClickOnFavoriteFilm = async () => {
        if (!favoriteFilm?.item && user?.isAuth) {
            setIsDeletedInFavorite(false)
            await addFavoriteFilmFx(film)
            setIsAddedInFavorite(true)
            setTimeout(() => {
                setIsAddedInFavorite(false)
            }, 3000);
        }
        if (favoriteFilm?.item && user?.isAuth) {
            setIsAddedInFavorite(false)
            await deleteFavoriteFilmFx(Number(query.filmId))
            setIsDeletedInFavorite(true)
            setTimeout(() => {
                setIsDeletedInFavorite(false)
            }, 3000);
        }
        if (!user?.isAuth) {
            setIsNotAuth(true)
        }
    }
    const handleClickOnLogin = () => {
        toggleIsNeedToBack(true)
        Router.push('/login')
    }
    staff.forEach(item => {
        if (actors.length < 10) {
            if (item.professionKey === EProfessionKey.ACTOR) {
                actors.push(

                    <FilmMainLink key={item.staffId}>
                        <Link href={`/name/${item.staffId}`}>
                            <Typography sx={{ cursor: 'pointer' }} fontSize={13} paddingTop={1}>{item.nameRu}</Typography>
                        </Link>
                    </FilmMainLink>



                )
            }
        }
    })
    return (
        <Grid container flexDirection='column' alignItems='center'>
            <img style={{ 'marginBottom': '20px' }} src={film.posterUrl} />

            {!_900px && <>
                <Grid item xs={12}>
                    <Button onClick={handleClickOnFavoriteFilm} color="warning" sx={{
                        'borderRadius': '10px',
                        'transition': 'all 0.5s',
                        '&:hover': {
                            'transform': 'scale(1.05)',
                            'transition': 'all 0.5s'
                        }
                    }} variant="outlined">{favoriteFilm?.item ? 'Удалить из избранного' : 'Добавить в избранное'}</Button>

                </Grid>
                <FilmAwards awards={awards} />
                <FilmMainActors staff={staff} />
            </>}
            {isAddedInFavorite && <Alert sx={{ 'position': 'fixed', 'bottom': '20px', 'left': '20px', 'zIndex': 100000 }} variant="filled" severity="success">Фильм добавлен в <Link style={{ 'color': "#ffff" }} target='__blank' href="/favorites">избранное</Link>  </Alert>}
            {isDeletedInFavorite && <Alert sx={{ 'position': 'fixed', 'bottom': '20px', 'left': '20px', 'zIndex': 100000 }} variant="filled" severity="warning">Фильм удален из <Link style={{ 'color': "#ffff" }} target='__blank' href="/favorites" >избранного</Link></Alert>}
            {isNotAuth && !user?.isAuth && <Alert onClose={() => { }} sx={{ 'position': 'absolute', 'bottom': '50%', 'left': '50%', 'zIndex': 100000, transform: 'translate(-50%, -50%)', }} variant="filled" severity="error">
                <AlertTitle>Ошибка при добавлении фильма</AlertTitle>
                Вы не авторизованы. <span onClick={handleClickOnLogin} style={{ 'color': 'white', 'cursor': 'pointer', 'borderBottom': '1px solid white' }}>Войти в аккаунт</span>
            </Alert>}
        </Grid>

    )
}

export default FilmMainLeft