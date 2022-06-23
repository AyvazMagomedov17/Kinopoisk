import { Button, Grid, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import Router from "next/router"

type Props = {}

const Page404 = (props: Props) => {
    const handleBack = () => {
        Router.back()
    }
    const handlePushOnMain = () => {
        Router.push('/films/tops')
    }
    return (

        <Grid flexDirection='column' justifyContent='center' alignItems='center' sx={{ 'width': '100vw', 'height': '100vh', 'backgroundColor': 'rgba(49, 0, 56, 1)' }} container>

            <Typography marginBottom={1} variant="h1" color='rgba(255, 255, 255, 1)' component='p'>404 Страница не найдена</Typography>

            <Button onClick={handleBack} color="success" variant="contained" sx={{ 'minWidth': '300px', 'minHeight': '50px', 'borderRadius': 5, marginBottom: 2 }}> Вернуться назад</Button>
            <Button onClick={handlePushOnMain} color="success" variant="contained" sx={{ 'minWidth': '300px', 'minHeight': '50px', 'borderRadius': 5 }}> Вернуться на главную</Button>



        </Grid >


    )
}
export default Page404