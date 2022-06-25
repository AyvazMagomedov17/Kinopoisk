import { Button, Grid, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import Router from "next/router"
import { useMaxWidthQuery } from "../../hooks/mediaQuery"

type Props = {}

const Page404 = (props: Props) => {
    const _610px = useMaxWidthQuery(610)
    const _530px = useMaxWidthQuery(530)
    const _480px = useMaxWidthQuery(480)
    const _395px = useMaxWidthQuery(395)
    const _345px = useMaxWidthQuery(345)
    const handleBack = () => {
        Router.back()
    }
    const handlePushOnMain = () => {
        Router.push('/films/tops')
    }
    return (

        <Grid justifyContent='center' alignItems='center' sx={{ 'width': '100vw', 'height': '100vh', 'backgroundColor': 'rgba(49, 0, 56, 1)' }} container>

            <Grid item xs={12}>
                <Grid flexDirection='column' container alignItems='center'>
                    <Typography marginBottom={1} fontSize={_345px ? 25 : _395px ? 28 : _480px ? 32 : _530px ? 38 : _610px ? 42 : 48} color='rgba(255, 255, 255, 1)' component='p'>404 Страница не найдена</Typography>

                    <Button size={_395px ? 'small' : 'medium'} onClick={handleBack} color="success" variant="contained" sx={{ 'minWidth': _395px ? '210px' : '250px', 'minHeight': '45px', 'borderRadius': 5, marginBottom: 2 }}> Вернуться назад</Button>
                    <Button size={_395px ? 'small' : 'medium'} onClick={handlePushOnMain} color="success" variant="contained" sx={{ 'minWidth': _395px ? '210px' : '250px', 'minHeight': '45px', 'borderRadius': 5 }}> Вернуться на главную</Button>
                </Grid>
            </Grid>





        </Grid >




    )
}
export default Page404