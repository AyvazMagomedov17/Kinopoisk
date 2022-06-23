import { Box, SvgIconTypeMap, Typography } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Router, { useRouter } from "next/router";
import { Fragment } from "react";

type Props = {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
    text: string
    link: string
    closeDrawer: () => void
}

const MenuDrawerItem = ({ Icon, link, text, closeDrawer }: Props) => {
    const router = useRouter()
    const handleClick = () => {
        closeDrawer()
        router.push(link)
    }
    return (
        <span onClick={handleClick}>
            <Typography sx={{
                'cursor': 'pointer',
                'transition': 'all 0.3s',
                '&:hover': {
                    'transform': 'scale(1.2)',
                    'transition': 'all 0.3s'
                }
            }} fontSize={20} marginBottom={5} alignItems='center' color='rgba(255, 255, 255, 1)'>
                <Box sx={{ 'display': 'flex', 'alignItems': 'center', }}><Icon fontSize='large' sx={{ 'marginRight': 3 }} />  {text}</Box>

            </Typography>
        </span>

    )
}

export default MenuDrawerItem