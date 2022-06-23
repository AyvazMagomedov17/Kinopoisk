import { Drawer, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import MovieIcon from '@mui/icons-material/Movie';
import MenuDrawerItem from "./MenuDrawerItem";
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import PersonIcon from '@mui/icons-material/Person';
import { useMaxWidthQuery } from "../../../hooks/mediaQuery";

type Props = {
    isOpen: boolean
    closeDrawer: () => void
}

const MenuDrawer = ({ isOpen, closeDrawer }: Props) => {
    const _710px = useMaxWidthQuery(710)
    const _545px = useMaxWidthQuery(545)
    const _430px = useMaxWidthQuery(430)
    return (
        <Drawer transitionDuration={500} open={isOpen} anchor="right" onClose={closeDrawer}>
            <Box sx={{ 'width': _430px ? '80vw' : _545px ? '60vw' : _710px ? '50vw' : '40vw', 'height': '100vh', 'backgroundColor': 'rgba(14, 4, 34, 1)', 'position': 'relative', }}>



                <Grid flexDirection='column' paddingTop={20} container alignItems='center' >

                    <MenuDrawerItem closeDrawer={closeDrawer} Icon={MovieIcon} text='Фильмы' link="/films/tops" />
                    <MenuDrawerItem closeDrawer={closeDrawer} Icon={CastConnectedIcon} text='Сериалы' link="/series/genres" />
                    <MenuDrawerItem closeDrawer={closeDrawer} Icon={PersonIcon} text='Персоны' link="/persons" />
                </Grid>
            </Box>
        </Drawer>
    )
}

export default MenuDrawer