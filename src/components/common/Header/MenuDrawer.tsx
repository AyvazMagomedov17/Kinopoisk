import { Drawer, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import MovieIcon from '@mui/icons-material/Movie';
import MenuDrawerItem from "./MenuDrawerItem";
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import PersonIcon from '@mui/icons-material/Person';
import { useMaxWidthQuery } from "../../../hooks/mediaQuery";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useStore } from "effector-react";
import { $user, resetUserEv, toggleIsNeedToBack } from "../../../models/user";
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
type Props = {
    isOpen: boolean
    closeDrawer: () => void
}

const MenuDrawer = ({ isOpen, closeDrawer }: Props) => {
    const isAuth = useStore($user)?.isAuth
    const _710px = useMaxWidthQuery(710)
    const _545px = useMaxWidthQuery(545)
    const _430px = useMaxWidthQuery(430)
    const exitFromAccount = () => {
        localStorage.removeItem('token')
        resetUserEv()
    }
    const toggleIsFromOtherPage = () => {
        toggleIsNeedToBack(true)
    }
    return (
        <Drawer transitionDuration={500} open={isOpen} anchor="right" onClose={closeDrawer}>
            <Box sx={{ 'width': _430px ? '80vw' : _545px ? '60vw' : _710px ? '50vw' : '40vw', 'height': '100vh', 'backgroundColor': 'rgba(14, 4, 34, 1)', 'position': 'relative', }}>
                <button onClick={closeDrawer} style={{ 'position': 'absolute', 'top': '20px', 'right': '20px', 'color': 'white', 'fontSize': 25 }}>✖</button>

                <Grid flexDirection='column' paddingTop={20} container alignItems='center' >
                    {!isAuth && <span onClick={toggleIsFromOtherPage}><MenuDrawerItem closeDrawer={closeDrawer} Icon={PersonAddAltIcon} text='Войти' link="/login" /></span>}
                    {isAuth && <MenuDrawerItem closeDrawer={closeDrawer} Icon={FavoriteIcon} text='Избранное' link="/favorites" />}
                    <MenuDrawerItem closeDrawer={closeDrawer} Icon={MovieIcon} text='Фильмы' link="/films/tops" />
                    <MenuDrawerItem closeDrawer={closeDrawer} Icon={CastConnectedIcon} text='Сериалы' link="/series/genres" />
                    <MenuDrawerItem closeDrawer={closeDrawer} Icon={PersonIcon} text='Персоны' link="/persons" />
                    {isAuth && <span onClick={exitFromAccount}>
                        <MenuDrawerItem closeDrawer={closeDrawer} Icon={LogoutIcon} text='Выйти из аккаунта' link="/films/tops" />
                    </span>}
                </Grid>
            </Box>
        </Drawer>
    )
}

export default MenuDrawer